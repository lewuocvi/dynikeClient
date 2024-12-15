const { io } = require("socket.io-client");

// Kết nối tới server
const socket = io("http://localhost:3000", { reconnectionAttempts: Infinity, timeout: 30000 });

// Khi kết nối thành công
socket.on("connect", () => {
  console.log("Đã kết nối tới server với id:", socket.id);
  // Gửi dữ liệu tới server
  socket.emit("message", "Xin chào từ client!");
});

// Nhận dữ liệu từ server
socket.on("message", (data) => {
  console.log("Nhận được tin nhắn từ server:", data);
});

// Xử lý khi ngắt kết nối
socket.on("disconnect", (reason) => {
  console.log("Đã ngắt kết nối, lý do:", reason);
});

// Xử lý lỗi kết nối
socket.on("connect_error", (error) => {
  console.error("Lỗi kết nối:", error.message);
});
