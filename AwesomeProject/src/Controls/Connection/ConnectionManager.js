module.exports = class ConnectionManager {
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
