// /* tslint:disable:no-unused-variable */
// import {FinanceApi} from './finance-api';
// import {User} from '../../models/user';
// import {Transaction} from '../../models/transaction';
// import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http';
// import {MockBackend} from '@angular/http/testing';
// import {ReflectiveInjector, provide} from '@angular/core';

// describe('FinanceApi', () => {
//   let financeApi;
//   let http;
//   let connection;
//   let user;

//   beforeEach(() => {
//     user = new User('login', 'password');

//     let injector = ReflectiveInjector.resolveAndCreate([
//       MockBackend, BaseRequestOptions, provide(Http, {
//         useFactory: (backend, options) => { return new Http(backend, options); },
//         deps: [MockBackend, BaseRequestOptions]
//       })
//     ]);
//     http = injector.get(Http);
//     let backend = injector.get(MockBackend);
//     backend.connections.subscribe(c => connection = c);

//     financeApi = new FinanceApi(http);
//   });

//   it('should call success when get Accounts', (done) => {
//     let success = (data) => {
//       expect(data.text()).toBe('called');
//       done();
//     };

//     financeApi.getAccounts(user, success);

//     connection.mockRespond(new Response(new ResponseOptions({ body: ['called'] })));
//   });

//   it('should call success when get Categories', (done) => {
//     let success = (data) => {
//       expect(data.text()).toBe('called');
//       done();
//     };

//     financeApi.getCategories(user, success);

//     connection.mockRespond(new Response(new ResponseOptions({ body: ['called'] })));
//   });

//   it('should call success when get Transactions', (done) => {
//     let success = (data) => {
//       expect(data.text()).toBe('called');
//       done();
//     };

//     financeApi.getTransactions(user, success);

//     connection.mockRespond(new Response(new ResponseOptions({ body: ['called'] })));
//   });

//   it('should call success when delete transaction', (done) => {
//     let success = (data) => {
//       expect(data.text()).toBe('called');
//       done();
//     };

//     financeApi.deleteTransaction('1', user, success);

//     connection.mockRespond(new Response(new ResponseOptions({ body: ['called'] })));
//   });

//   it('should call success when update transaction', (done) => {
//     let success = (data) => {
//       expect(data.text()).toBe('called');
//       done();
//     };
//     let transaction = new Transaction('1', '2', 3, 'description', '2010-01-11', '3', 'name', '4', 'name2', 'debit');

//     financeApi.updateTransaction(transaction, user, success);

//     connection.mockRespond(new Response(new ResponseOptions({ body: ['called'] })));
//   });
// });
