(function (){

angular.module('Assignment',[])
.controller('myController',myController)
.controller('mySecondController',mySecondController)
.factory('ServicesFactory',ServicesFactory);
myController.$inject=['ServicesFactory'];
var serviceinstance1=null;
var serviceinstance2=null;
function myController(ServicesFactory){
  var instance=this;
  var service=ServicesFactory.Service1();
  var service2=ServicesFactory.Service2();
  instance.Item=service.getItem();
  instance.removeItem = function (index) {
    service2.push(service.getItem()[index]);
    service.removeItem(index);
  };
}
function mySecondController(ServicesFactory){
  var instance=this;
  service=ServicesFactory.Service2();
  instance.Item=service.getItem();

}

function ServicesFactory(){
  var factory=
    {
      Service1:function() {
        if(serviceinstance1===null){
          serviceinstance1=new ServiceOne();
        }
      return serviceinstance1;
    },
    Service2:function() {
      if(serviceinstance2===null){
        serviceinstance2=new ServiceTwo();
      }
    return serviceinstance2;
  }
  };
    return factory;

}

function ServiceOne(){
 var instance=this;
 var items_list=[
    {name:"cookies",quantity:5},{name:"gems",quantity:10},{name:"candy",quantity:12},{name:"hats",quantity:1},{name:"books",quantity:3}
  ];
 instance.getItem=function(){
   return items_list;
 };
 instance.removeItem=function(index){
   items_list.splice(index,1);
 };
}

function ServiceTwo(){
 var instance=this;
 var item=[];
 instance.getItem=function(){
   return item;
 };
 instance.push=function(data){
   item.push(data);
 };
}

})()
