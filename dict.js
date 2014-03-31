
var Dictionary = Class.$extend({
  __init__:function(obj) {
      this.length = 0;
      this.items = {};
      for (var p in obj) {
              if (obj.hasOwnProperty(p)) {
                  this.items[p] = obj[p];
                  this.length++;
              }
          }
  },
  
  __setitem__:function(key, value){
      var previous = undefined;
      if (this.__hasitem__(key)) {
          previous = this.items[key];
      }
      else {
          this.length++;
      }
      this.items[key] = value;
      return previous;
  },
  
  __getitem__:function(key){
      return this.__hasitem__(key) ? this.items[key] : undefined;
  },
  
  __hasitem__:function(key){
      return this.items.hasOwnProperty(key);
  },
  
  get:function(key){
      return this.__getitem__(key);
  },
  
  keys:function(){
      var keys = [];
      for (var k in this.items) {
          if (this.__hasitem__(k)) {
              keys.push(k);
          }
      }
      return keys;
  },
  
  del:function(key){
      if (this.__hasitem__(key)) {
          previous = this.items[key];
          this.length--;
          delete this.items[key];
          return previous;
      }
      else {
          return undefined;
      }
  },
  
  values:function(){
      var values = [];
      for (var k in this.items) {
          if (this.__hasitem__(k)) {
              values.push(this.items[k]);
          }
      }
      return values;
  },
  
  each:function(){
      for (var k in this.items) {
          if (this.hasItem(k)) {
              fn(k, this.items[k]);
          }
      }
  },
  
  clear:function(){
      this.items = {};
      this.length = 0;
  },
});