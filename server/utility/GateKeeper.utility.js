export default class GateKeeper {
  static inputCheck(req, res, next) {
    const body = req.body;
    for (const n in body) {
      console.log(body[n]);
    }
  }
}
