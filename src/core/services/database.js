import axios from 'axios';

export class Database {
  constructor(actions, modelClass) {
    this._actions = actions;
    this._modelClass = modelClass;
    this._list = [];
  }

  subscribe(emit) {
    let ref = axios.get('assets/tours.json')
      .then(function(response) {
        if (response) {
          response.data.map(function(item) {
            let tour = item;
            tour.key = item.id;
            tour.lengthType = item.length_type;
            tour.operatorName = item.operator_name;
            this._list.push(new this._modelClass(tour));
          }.bind(this));
          if (this._list && this._list.length === response.data.length) {
            emit(this._actions.onLoad(this._list));
          }
        }
      }.bind(this))
      .catch(function() {});
    return () => ref.off();
  }
}
