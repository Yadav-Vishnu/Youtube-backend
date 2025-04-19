class ApiResonpse {
  constructor(data, statusCode = 200) {
    this.data = data;
    this.statusCode = statusCode;
  }

  send(res) {
    res.status(this.statusCode).json(this.data);
  }
}