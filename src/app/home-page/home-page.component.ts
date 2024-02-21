import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import * as subscriptions from '../../graphql/subscriptions';
import { ResponseNumberValues } from '../types/response.interface';
import { nanoid } from 'nanoid';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  public formNumbers!: FormGroup;
  public allNumbers: ResponseNumberValues[] = [];
  public sum: number = 0;
  public showAll$: Subject<boolean> = new Subject();
  private subscription$!: Subscription;

  public client: any;

  constructor(private fb: FormBuilder) {
    this.client = generateClient();
  }

  public async ngOnInit() {
    this.formNumbers = this.fb.group({
      number: ['', [Validators.required, Validators.maxLength(10)]],
    });

    this.subscription$ = this.client
      .graphql({ query: subscriptions.onCreateNumberValue })
      .subscribe((data: any) => {
        this.sum += data.data.onCreateNumberValue.value;
      });
  }

  public async onSubmit(): Promise<any> {
    if (this.formNumbers.invalid) {
      return;
    }
    const newData = {
      id: nanoid(),
      value: Number(this.formNumbers.value.number),
    };
    try {
      const response = await this.client.graphql({
        query: mutations.createNumberValue,
        variables: {
          input: newData,
        },
      });
      this.formNumbers.reset();
    } catch (e) {
      console.log('Error adding a number...', e);
    }
  }

  public async onReport(): Promise<any> {
    const response = await this.client.graphql({
      query: queries.listNumberValues,
    });
    this.allNumbers = response.data.listNumberValues.items.map(
      (item: any) => item.value
    );

    this.showAll$.next(true);
  }

  public ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }
}