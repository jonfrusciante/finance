System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/shared/services/sha1/sha1.service.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(){this.POW_2_24=Math.pow(2,24),this.POW_2_32=Math.pow(2,32)}return a.prototype.hex=function(a){for(var b,c="",d=7;d>=0;--d)b=a>>>(d<<2)&15,c+=b.toString(16);return c},a.prototype.lrot=function(a,b){return a<<b|a>>>32-b},a.prototype.string2ArrayBuffer=function(a){a=a.replace(/[\u0080-\u07ff]/g,function(a){var b=a.charCodeAt(0);return String.fromCharCode(192|b>>6,128|63&b)}),a=a.replace(/[\u0080-\uffff]/g,function(a){var b=a.charCodeAt(0);return String.fromCharCode(224|b>>12,128|b>>6&63,128|63&b)});for(var b=a.length,c=new Uint8Array(b),d=0;b>d;++d)c[d]=a.charCodeAt(d);return c.buffer},a.prototype.hash=function(a){var b;b=a instanceof ArrayBuffer?a:this.string2ArrayBuffer(String(a));var c,d,f=1732584193,g=4023233417,h=2562383102,i=271733878,j=3285377520,k=b.byteLength,l=k<<3,m=l+65,n=Math.ceil(m/512)<<9,o=n>>>3,p=o>>>2,q=new e(p),r=q.bytes,s=new Uint32Array(80),t=new Uint8Array(b);for(c=0;k>c;++c)r[c]=t[c];for(r[k]=128,q.set(p-2,Math.floor(l/this.POW_2_32)),q.set(p-1,4294967295&l),c=0;p>c;c+=16){for(d=0;16>d;++d)s[d]=q.get(c+d);for(;80>d;++d)s[d]=this.lrot(s[d-3]^s[d-8]^s[d-14]^s[d-16],1);var u,v,w,x=f,y=g,z=h,A=i,B=j;for(d=0;80>d;++d)20>d?(u=y&z|~y&A,v=1518500249):40>d?(u=y^z^A,v=1859775393):60>d?(u=y&z^y&A^z&A,v=2400959708):(u=y^z^A,v=3395469782),w=this.lrot(x,5)+u+B+v+s[d]&4294967295,B=A,A=z,z=this.lrot(y,30),y=x,x=w;f=f+x&4294967295,g=g+y&4294967295,h=h+z&4294967295,i=i+A&4294967295,j=j+B&4294967295}return this.hex(f)+this.hex(g)+this.hex(h)+this.hex(i)+this.hex(j)},a}();b.Sha1=d;var e=function(){function a(a){this.POW_2_24=Math.pow(2,24),this.POW_2_32=Math.pow(2,32),this.bytes=new Uint8Array(a<<2)}return a.prototype.get=function(a){return a<<=2,this.bytes[a]*this.POW_2_24+(this.bytes[a+1]<<16|this.bytes[a+2]<<8|this.bytes[a+3])},a.prototype.set=function(a,b){var c=Math.floor(b/this.POW_2_24),d=b-c*this.POW_2_24;a<<=2,this.bytes[a]=c,this.bytes[a+1]=d>>16,this.bytes[a+2]=d>>8&255,this.bytes[a+3]=255&d},a}();return c.exports}),System.registerDynamic("app/shared/services/sync/sync.service.js",["../repository/accountRepository.service","../repository/categoryRepository.service","../repository/transactionRepository.service","../api/finance-api.service","../date/date.service","@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("../repository/accountRepository.service"),g=a("../repository/categoryRepository.service"),h=a("../repository/transactionRepository.service"),i=a("../api/finance-api.service"),j=a("../date/date.service"),k=a("@angular/core"),l=function(){function a(a,b,c,d,e){this._api=a,this._accountRepository=b,this._categoryRepository=c,this._transactionRepository=d,this._dateService=e}return a.prototype.getAllDataFromServer=function(a,b){var c=this;this._api.getAccounts(a,function(a){return c._accountRepository.saveAll(a._body)}),this._api.getCategories(a,function(a){return c._categoryRepository.saveAll(a._body)}),this._api.getTransactions(a,function(a){return c.convertTransactionFromServer(a._body,function(a){c._transactionRepository.saveAll(a),b()})})},a.prototype.deleteAllLocalData=function(){this._accountRepository.deleteAll(),this._categoryRepository.deleteAll(),this._transactionRepository.deleteAll()},a.prototype.convertTransactionFromServer=function(a,b){for(var c=JSON.parse(a),d=c.length,e=[],f=0;d>f;f++){var g=c[f];g.date=this._dateService.convertToDateFromString(g.date),e.push(g)}b(e)},a=d([k.Injectable(),e("design:paramtypes",[i.FinanceApi,f.AccountRepository,g.CategoryRepository,h.TransactionRepository,j.DateService])],a)}();return b.Sync=l,c.exports}),System.registerDynamic("app/shared/models/user.model.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(a,b){this.login=a,this.password=b,this.property="1"}return a}();return b.User=d,c.exports}),System.registerDynamic("app/+login/login.component.js",["@angular/core","@angular/common","@angular/router","../shared/services/sha1/sha1.service","../shared/services/repository/userRepository.service","../shared/services/repository/accountRepository.service","../shared/services/repository/categoryRepository.service","../shared/services/repository/transactionRepository.service","../shared/services/api/finance-api.service","../shared/services/sync/sync.service","../shared/models/user.model","../shared/services/date/date.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/common"),h=a("@angular/router"),i=a("../shared/services/sha1/sha1.service"),j=a("../shared/services/repository/userRepository.service"),k=a("../shared/services/repository/accountRepository.service"),l=a("../shared/services/repository/categoryRepository.service"),m=a("../shared/services/repository/transactionRepository.service"),n=a("../shared/services/api/finance-api.service"),o=a("../shared/services/sync/sync.service"),p=a("../shared/models/user.model"),q=a("../shared/services/date/date.service"),r=function(){function a(a,b,c,d){this._userRepository=a,this._sync=b,this._sha1=c,this._router=d}return a.prototype.ngOnInit=function(){this._userRepository.deleteUser(),this._sync.deleteAllLocalData()},a.prototype.login=function(){var a=this._sha1.hash(this.password),b=new p.User(this.username,a);this._userRepository.saveUser(b),this._sync.getAllDataFromServer(b,this.afterLogin.bind(this))},a.prototype.afterLogin=function(){this._router.navigate(["/transaction-list"])},a=d([f.Component({moduleId:c.id,selector:"app-login",templateUrl:"login.component.html",styleUrls:["login.component.css"],directives:[g.FORM_DIRECTIVES,g.CORE_DIRECTIVES],providers:[i.Sha1,j.UserRepository,o.Sync,n.FinanceApi,k.AccountRepository,l.CategoryRepository,m.TransactionRepository,q.DateService]}),e("design:paramtypes",[j.UserRepository,o.Sync,i.Sha1,h.Router])],a)}();return b.LoginComponent=r,c.exports}),System.registerDynamic("app/+login/index.js",["./login.component"],!0,function(a,b,c){"use strict";var d=a("./login.component");return b.LoginComponent=d.LoginComponent,c.exports}),System.registerDynamic("app/+transaction-list/transaction-list.component.js",["@angular/core","@angular/common","@angular/router","../shared/services/repository/accountRepository.service","../shared/services/repository/categoryRepository.service","../shared/services/repository/transactionRepository.service","../shared/services/date/date.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/common"),h=a("@angular/router"),i=a("../shared/services/repository/accountRepository.service"),j=a("../shared/services/repository/categoryRepository.service"),k=a("../shared/services/repository/transactionRepository.service"),l=a("../shared/services/date/date.service"),m=function(){function a(a,b,c,d){this._accountRepository=c,this._categoryRepository=d,this._transactionRepository=a,this._dateService=b}return a.prototype.ngOnInit=function(){var a=new Date,b=new Date(a.getFullYear(),a.getMonth(),1),c=new Date(a.getFullYear(),a.getMonth(),30);this.initialDate=this._dateService.convertToUsString(b),this.finalDate=this._dateService.convertToUsString(c),this.account="",this.category="",this.transactions=this._transactionRepository.getFiltered("","",b,c),this.accounts=this._accountRepository.getAll(),this.categories=this._categoryRepository.getAll()},a.prototype.search=function(){var a=this._dateService.convertToDateFromString(this.initialDate),b=this._dateService.convertToDateFromString(this.finalDate);console.log(this.account),this.transactions=this._transactionRepository.getFiltered(this.category,this.account,a,b)},a=d([f.Component({moduleId:c.id,selector:"app-transaction-list",templateUrl:"transaction-list.component.html",styleUrls:["transaction-list.component.css"],directives:[g.CORE_DIRECTIVES,h.ROUTER_DIRECTIVES],providers:[i.AccountRepository,j.CategoryRepository,k.TransactionRepository,l.DateService]}),e("design:paramtypes",[k.TransactionRepository,l.DateService,i.AccountRepository,j.CategoryRepository])],a)}();return b.TransactionListComponent=m,c.exports}),System.registerDynamic("app/+transaction-list/index.js",["./transaction-list.component"],!0,function(a,b,c){"use strict";var d=a("./transaction-list.component");return b.TransactionListComponent=d.TransactionListComponent,c.exports}),System.registerDynamic("app/shared/services/repository/accountRepository.service.js",["./repository.service"],!0,function(a,b,c){"use strict";var d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},e=a("./repository.service"),f=function(a){function b(){a.call(this,"account")}return d(b,a),b}(e.Repository);return b.AccountRepository=f,c.exports}),System.registerDynamic("app/shared/services/repository/categoryRepository.service.js",["./repository.service"],!0,function(a,b,c){"use strict";var d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},e=a("./repository.service"),f=function(a){function b(){a.call(this,"category")}return d(b,a),b}(e.Repository);return b.CategoryRepository=f,c.exports}),System.registerDynamic("app/shared/services/repository/repository.service.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(a){this._key=a}return a.prototype.save=function(a){var b=this.makeACopy(a),c=a.uuid,d=this.getData(),e=this.findIndex(c,d);e>=0?d.splice(e,1,b):d.push(b),this.setData(d)},a.prototype.saveAll=function(a){this.setData(a)},a.prototype.get=function(a){var b=this.getData(),c=this.findIndex(a,b);return c>=0?b[c]:null},a.prototype["delete"]=function(a){var b=this.getData(),c=this.findIndex(a,b);c>=0&&b.splice(c,1),this.setData(b)},a.prototype.getAll=function(){return this.makeACopy(this.getData())},a.prototype.deleteAll=function(){this.setData("[]")},a.prototype.makeACopy=function(a){return JSON.parse(JSON.stringify(a))},a.prototype.findIndex=function(a,b){for(var c=b.length,d=0;c>d;d++)if(b[d].uuid===a)return d;return-1},a.prototype.getData=function(){var a=JSON.parse(localStorage.getItem(this._key));return null!==a?a:[]},a.prototype.setData=function(a){var b="string"==typeof a?JSON.parse(a):a;localStorage.setItem(this._key,JSON.stringify(b))},a}();return b.Repository=d,c.exports}),System.registerDynamic("app/shared/services/repository/transactionRepository.service.js",["./repository.service","../date/date.service","@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},e=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},f=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},g=a("./repository.service"),h=a("../date/date.service"),i=a("@angular/core"),j=function(a){function b(b){a.call(this,"transaction"),this._dateService=b}return d(b,a),b.prototype.get=function(b){var c=a.prototype.get.call(this,b);return null!==c&&(c.date=this._dateService.convertToDateFromString(c.date),c.account={uuid:c.accountUuid},c.category={uuid:c.categoryUuid}),c},b.prototype.getFiltered=function(a,b,c,d){for(var e=[],f=this.getAll(),g=f.length,h=0;g>h;h++){var i=f[h];i.date=this._dateService.convertToDateFromString(i.date),i.categoryUuid!==a&&""!==a||i.accountUuid!==b&&""!==b||!(c<=i.date||null===c)||!(i.date<=d||null===d)||e.push(i)}return e},b=e([i.Injectable(),f("design:paramtypes",[h.DateService])],b)}(g.Repository);return b.TransactionRepository=j,c.exports}),System.registerDynamic("app/shared/services/repository/userRepository.service.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(){this._key="user"}return a.prototype.saveUser=function(a){localStorage.setItem(this._key,JSON.stringify(a))},a.prototype.deleteUser=function(){localStorage.removeItem(this._key)},a.prototype.getUser=function(){return JSON.parse(localStorage.getItem(this._key))},a}();return b.UserRepository=d,c.exports}),System.registerDynamic("app/shared/services/date/date.service.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.convertToDateFromString=function(a){var b=parseInt(a.substr(8,2)),c=parseInt(a.substr(5,2))-1,d=parseInt(a.substr(0,4));return new Date(d,c,b)},a.prototype.convertToUsString=function(a){var b=String(a.getFullYear()),c=this.pad(a.getMonth()+1,2),d=this.pad(a.getDate(),2);return b+"-"+c+"-"+d},a.prototype.pad=function(a,b){var c="000000000"+a;return c.substr(c.length-b)},a=d([f.Injectable(),e("design:paramtypes",[])],a)}();return b.DateService=g,c.exports}),System.registerDynamic("app/shared/services/api/finance-api.service.js",["@angular/core","@angular/http"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=function(){function a(a){this.DEFAULT_URL="http://financeserver-diogonc.rhcloud.com",this._http=a}return a.prototype.createHeader=function(a){var b=new g.Headers;return b.append("username",a.login),b.append("token",a.password),b.append("propertyUuid",a.property),b},a.prototype.getAccounts=function(a,b){var c=this;return this._http.get(this.DEFAULT_URL+'/account?where={"propertyUuid":"'+a.property+'"}',{headers:this.createHeader(a)}).subscribe(function(a){return b(a)},function(a){return c.logError(a)},function(){return console.log("Complete")}),!1},a.prototype.getCategories=function(a,b){var c=this;return this._http.get(this.DEFAULT_URL+'/category?where={"propertyUuid":"'+a.property+'"}',{headers:this.createHeader(a)}).subscribe(function(a){return b(a)},function(a){return c.logError(a)},function(){return console.log("Complete")}),!1},a.prototype.getTransactions=function(a,b){var c=this;return this._http.get(this.DEFAULT_URL+'/transaction?where={"propertyUuid":"'+a.property+'"}',{headers:this.createHeader(a)}).subscribe(function(a){return c.onSuccess(a,b)},function(a){return c.logError(a)},function(){return console.log("Complete")}),!1},a.prototype.saveTransaction=function(a,b,c){var d=this;this._http.post(this.DEFAULT_URL+"/transaction",JSON.stringify(a),{headers:this.createHeader(b)}).subscribe(function(a){return d.onSuccess(a,c)},function(a){return d.logError(a)},function(){return console.log("Complete")})},a.prototype.updateTransaction=function(a,b,c){var d=this;this._http.put(this.DEFAULT_URL+"/transaction/"+a.uuid,JSON.stringify(a),{headers:this.createHeader(b)}).subscribe(function(a){return d.onSuccess(a,c)},function(a){return d.logError(a)},function(){return console.log("Complete")})},a.prototype.deleteTransaction=function(a,b,c){var d=this;this._http["delete"](this.DEFAULT_URL+"/transaction/"+a,{headers:this.createHeader(b)}).subscribe(function(a){return d.onSuccess(a,c)},function(a){return d.logError(a)},function(){return console.log("Complete")})},a.prototype.onSuccess=function(a,b){b(a)},a.prototype.logError=function(a){console.log("erro ao enviar a requisição: "+JSON.stringify(a))},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.FinanceApi=h,c.exports}),System.registerDynamic("app/shared/models/transaction.model.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(a,b,c,d,e,f,g,h,i,j){null===a&&(a=this.generateGuid()),this.uuid=a,this.propertyUuid=b,this.value=c,this.description=d,this.date=e,this.accountUuid=f,this.accountName=g,this.categoryUuid=h,this.categoryName=i,this.categoryType=j,this.payed="true"}return a.prototype.generateGuid=function(){for(var a=[],b="0123456789abcdef",c=0;36>c;c++)a[c]=b.substr(Math.floor(16*Math.random()),1);return a[14]="4",a[19]=b.substr(3&a[19]|8,1),a[8]=a[13]=a[18]=a[23]='"-',a.join("")},a}();return b.Transaction=d,c.exports}),System.registerDynamic("app/+transaction/transaction.component.js",["@angular/core","@angular/common","@angular/router","../shared/services/repository/accountRepository.service","../shared/services/repository/categoryRepository.service","../shared/services/repository/transactionRepository.service","../shared/services/repository/userRepository.service","../shared/services/date/date.service","../shared/services/api/finance-api.service","../shared/models/transaction.model"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/common"),h=a("@angular/router"),i=a("../shared/services/repository/accountRepository.service"),j=a("../shared/services/repository/categoryRepository.service"),k=a("../shared/services/repository/transactionRepository.service"),l=a("../shared/services/repository/userRepository.service"),m=a("../shared/services/date/date.service"),n=a("../shared/services/api/finance-api.service"),o=a("../shared/models/transaction.model"),p=function(){function a(a,b,c,d,e,f,g,h){this._accountRepository=a,this._categoryRepository=b,this._transactionRepository=c,this._userRepository=d,this._dateService=e,this._api=f,this._params=g,this._router=h}return a.prototype.ngOnInit=function(){this.accounts=this._accountRepository.getAll(),this.categories=this._categoryRepository.getAll(),this._user=this._userRepository.getUser();var a=this._params.getParam("id");if("undefined"!=typeof a){var b=this._transactionRepository.get(a);return void(this.transactionVm=this.createTransactionVm(b))}this.transactionVm=new q(null,0,"",this._dateService.convertToUsString(new Date),this._user.property,0,0)},a.prototype.save=function(){var a=this,b=this.accounts[this.transactionVm.accountIndex],c=this.categories[this.transactionVm.categoryIndex],d=this.transactionVm,e=new o.Transaction(d.uuid,this._user.property,d.value,d.description,this._dateService.convertToDateFromString(d.date),b.uuid,b.name,c.uuid,c.name,c.categoryType);null===d.uuid?this._api.saveTransaction(e,this._user,function(){return a.onSave(e)}):this._api.updateTransaction(e,this._user,function(){return a.onSave(e)})},a.prototype["delete"]=function(){var a=this;this._api.deleteTransaction(this.transactionVm.uuid,this._user,function(){return a.onDelete(a.transactionVm.uuid)})},a.prototype.createTransactionVm=function(a){var b=0,c=0;return null!==a.accountUuid&&(b=this.findIndex(a.accountUuid,this.accounts)),null!==a.categoryUuid&&(c=this.findIndex(a.categoryUuid,this.categories)),new q(a.uuid,a.value,a.description,this._dateService.convertToUsString(a.date),a.propertyUuid,b,c)},a.prototype.findIndex=function(a,b){for(var c=b.length,d=0;c>d;d++)if(b[d].uuid===a)return d;return-1},a.prototype.onSave=function(a){this._transactionRepository.save(a),this._router.navigate(["/transaction-list"])},a.prototype.onDelete=function(a){this._transactionRepository["delete"](a),this._router.navigate(["/transaction-list"])},a=d([f.Component({moduleId:c.id,selector:"app-transaction",templateUrl:"transaction.component.html",styleUrls:["transaction.component.css"],directives:[g.CORE_DIRECTIVES],providers:[i.AccountRepository,j.CategoryRepository,k.TransactionRepository,l.UserRepository,m.DateService,n.FinanceApi]}),e("design:paramtypes",[i.AccountRepository,j.CategoryRepository,k.TransactionRepository,l.UserRepository,m.DateService,n.FinanceApi,h.RouteSegment,h.Router])],a)}();b.TransactionComponent=p;var q=function(){function a(a,b,c,d,e,f,g){this.uuid=a,this.value=b,this.description=c,this.date=d,this.propertyUuid=e,this.accountIndex=f,this.categoryIndex=g}return a}();return c.exports}),System.registerDynamic("app/+transaction/index.js",["./transaction.component"],!0,function(a,b,c){"use strict";var d=a("./transaction.component");return b.TransactionComponent=d.TransactionComponent,c.exports}),System.registerDynamic("app/finance.component.js",["@angular/core","@angular/router","@angular/http","./+login","./+transaction-list","./+transaction"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("@angular/http"),i=a("./+login"),j=a("./+transaction-list"),k=a("./+transaction"),l=function(){function a(){this.title="finance works!"}return a=d([f.Component({moduleId:c.id,selector:"finance-app",templateUrl:"finance.component.html",styleUrls:["finance.component.css"],directives:[g.ROUTER_DIRECTIVES],providers:[g.ROUTER_PROVIDERS,h.HTTP_PROVIDERS]}),g.Routes([{path:"/",component:i.LoginComponent},{path:"/transaction-list",component:j.TransactionListComponent},{path:"/transaction-new",component:k.TransactionComponent},{path:"/transaction-edit/:id",component:k.TransactionComponent}]),e("design:paramtypes",[])],a)}();return b.FinanceAppComponent=l,c.exports}),System.registerDynamic("app/index.js",["./environment","./finance.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./finance.component");return b.FinanceAppComponent=e.FinanceAppComponent,c.exports});