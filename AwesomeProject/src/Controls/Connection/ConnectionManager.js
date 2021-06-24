module.exports = class ConnectionManager {
  // TODO: if is a connection manager
  //       should implements Singleton
  constructor(url) {
    this.url_address = url;
  }

  // Getter
  get url_address() {
    return this.url_address;
  }
  // Method
  static sum(a, b) {
    return a + b;
  }
};
