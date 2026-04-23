class InputData {
  constructor() {
    this.data = [];
  }

  addData(value) {
    this.data.push(value);
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = [];
  }

  getLastData() {
    return this.data[this.data.length - 1];
  }
}