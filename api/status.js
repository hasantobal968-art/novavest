export default function handler(req, res) {
  res.status(200).json({
    app: "NovaVest",
    status: "online"
  });
}
