// import { AssertionError } from "assert";
// let deadLine = '2019-03-17';
describe("Таймер", function(){
  // it("Возвращает объект", function(){
  //   assert.typeOf(getTimeRemaining(),'object');
  // });

  it("Устанавливает таймер обратного отсчета", function(){
    assert.typeOf(setClock('timer', deadLine),'string');
  });

});