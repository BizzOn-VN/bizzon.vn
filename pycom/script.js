/* ==========================================================================
   Pycom AI landing page
   ========================================================================== */

/* --------------------------------------------------------------------------
   CẤU HÌNH: điền các giá trị thật vào đây trước khi đưa trang lên mạng.
   Mục nào để trống thì trang tự ẩn mục đó (hoặc trỏ nút về form đăng ký).
   -------------------------------------------------------------------------- */
const CONFIG = {
  // Nơi nhận lead từ form: Google Apps Script gắn với Sheet "Pycom - lead".
  // Form gửi POST với các trường: name, phone, industry, plan, page,
  // và chờ phản hồi JSON {"ok": true}.
  LEAD_ENDPOINT: "https://script.google.com/macros/s/AKfycbyDSVGwy1oGcYG4A1LZW9xYNoUMCNec5CIeO7Dte3Op1TbqClYqu2ac5JbP0HBEI4dU2Q/exec",
  // Link Zalo OA, ví dụ "https://zalo.me/0123456789".
  ZALO_URL: "",
  // Số hotline hiển thị ở footer, ví dụ "0909 123 456".
  HOTLINE: "",
  EMAIL: "",
  OFFICE: "",
};

/* --------------------------------------------------------------------------
   Kịch bản hội thoại mẫu cho phần "AI chat ra việc"
   -------------------------------------------------------------------------- */
const SCENARIOS = {
  retail: {
    avatar: "AI",
    title: "Điện Máy Gia Đình",
    subtitle: "AI Agent đang trả lời",
    channel: "Zalo OA",
    steps: [
      ["Kiểm tồn kho Quận 7", "Gọi API kho: mã A2 còn 3 máy"],
      ["Tra lịch sử mua hàng", "Lấy tên và địa chỉ giao gần nhất của khách"],
      ["Tạo đơn và chuyển kho", "Ghi đơn vào hệ thống, báo kho Q7 chuẩn bị hàng"],
    ],
    note: "Không nhân viên nào phải mở phần mềm để gõ đơn này.",
    messages: [
      { from: "user", time: "22:15", text: "Shop ơi, máy lọc nước mã A2 còn hàng ở kho Quận 7 không? Mai ship sáng được không shop?" },
      { from: "ai", time: "22:15", done: [0, 1], text: "Dạ chào anh Hoàng! Em vừa kiểm kho Q7, mã A2 hiện còn <b>3 máy</b> ạ. Bên em giao được từ 8h30 đến 10h sáng mai. Địa chỉ nhận vẫn là <code>123 Nguyễn Thị Thập</code> đúng không anh, để em lên đơn giữ máy luôn?" },
      { from: "user", time: "22:15", text: "Đúng rồi em, ship luôn nhé." },
      { from: "ai", time: "22:15", done: [2], text: "Dạ em đã tạo đơn <code>#DH-8921</code> và chuyển sang kho Q7 chuẩn bị hàng sáng mai. Chúc anh buổi tối an lành ạ." },
    ],
    result: { label: "Kết quả trong hệ thống", text: "Đã tạo đơn #DH-8921 · chuyển kho Q7" },
  },

  b2b: {
    avatar: "AI",
    title: "Phòng Kế Toán · Nhà phân phối",
    subtitle: "AI Agent đang trả lời",
    channel: "Zalo OA",
    steps: [
      ["Nhận diện đại lý", "Đối chiếu mã số thuế với danh sách đối tác"],
      ["Đối soát hóa đơn", "Đọc 12 hóa đơn tháng 10 trên phần mềm kế toán"],
      ["Xuất và gửi sao kê", "Tạo file PDF, gửi lại ngay trong hội thoại"],
    ],
    note: "Kế toán không phải dừng việc để tra công nợ cho từng đại lý.",
    messages: [
      { from: "user", time: "08:02", text: "Em ơi gửi anh sao kê công nợ tháng 10 nhé. MST 0301234567." },
      { from: "ai", time: "08:02", done: [0, 1, 2], text: "Dạ em chào anh Tuấn. Em vừa đối soát <b>12 hóa đơn</b> tháng 10 của đại lý mình: tổng công nợ <b>184.500.000đ</b>, hạn thanh toán gần nhất là 20/11. Em gửi anh file chi tiết ạ.", attach: "file" },
      { from: "user", time: "08:03", text: "Ok em. Lô hàng tháng này anh vẫn được chiết khấu cấp 1 chứ?" },
      { from: "ai", time: "08:03", text: "Dạ đúng ạ, đại lý mình đang ở <b>cấp 1, chiết khấu 12%</b> theo chính sách quý 4. Anh cần em lên báo giá theo mức này không ạ?" },
    ],
    result: { label: "Kết quả trong hệ thống", text: "Đã gửi sao kê công nợ · 12 hóa đơn" },
  },

  owner: {
    avatar: "AI",
    title: "Trợ lý vận hành",
    subtitle: "Dành cho chủ doanh nghiệp",
    channel: "Nội bộ",
    steps: [
      ["Truy vấn doanh thu", "Đọc dữ liệu bán hàng 7 ngày từ database"],
      ["Đối chiếu tồn kho", "Phát hiện mã bán chạy sắp hết hàng"],
      ["Lập phiếu đề xuất nhập", "Tạo phiếu, gửi bộ phận mua hàng duyệt"],
    ],
    note: "Bạn giao việc bằng một câu nhắn, không cần tìm đúng màn hình trong phần mềm.",
    messages: [
      { from: "user", time: "07:30", text: "Tuần này bán được bao nhiêu rồi em?" },
      { from: "ai", time: "07:30", done: [0, 1], text: "Dạ 7 ngày qua doanh thu đạt <b>312.400.000đ</b>, tăng 14% so với tuần trước. Bán chạy nhất là máy lọc nước A2 với 41 máy, kho Q7 chỉ còn 3 máy. Anh có muốn em lập phiếu đề xuất nhập thêm không ạ?", attach: "chart" },
      { from: "user", time: "07:31", text: "Lập đi, nhập 30 máy." },
      { from: "ai", time: "07:31", done: [2], text: "Dạ em đã lập phiếu <code>#PN-0312</code> đề xuất nhập 30 máy A2 và gửi bộ phận mua hàng duyệt ạ." },
    ],
    result: { label: "Kết quả trong hệ thống", text: "Đã lập phiếu nhập #PN-0312 · chờ duyệt" },
  },

  handoff: {
    avatar: "AI",
    title: "Điện Máy Gia Đình",
    subtitle: "AI Agent đang trả lời",
    channel: "Zalo OA",
    steps: [
      ["Nhận ra khách khiếu nại", "Chuyển sang quy trình xử lý khiếu nại"],
      ["Đối chiếu chính sách đổi trả", "Đơn #DH-8921 còn trong 7 ngày đổi mới"],
      ["Bàn giao cho nhân viên", "Gửi kèm tóm tắt để khách không phải kể lại"],
    ],
    note: "AI không cố trả lời việc cần người thật quyết. Nó chuyển đúng người, đúng lúc.",
    messages: [
      { from: "user", time: "14:40", text: "Máy lọc mới lắp 2 hôm đã rò nước rồi, shop xử lý sao đây?" },
      { from: "ai", time: "14:40", done: [0], text: "Dạ em rất xin lỗi anh về sự cố này. Anh cho em xin mã đơn hoặc số điện thoại đặt hàng để em kiểm tra ngay ạ." },
      { from: "user", time: "14:41", text: "DH-8921" },
      { from: "ai", time: "14:41", done: [1, 2], text: "Dạ đơn <code>#DH-8921</code> còn trong thời hạn <b>7 ngày đổi mới</b>. Em đã chuyển trường hợp của anh cho chị Hà bên chăm sóc khách hàng kèm đầy đủ thông tin, chị sẽ liên hệ anh để hẹn kỹ thuật qua kiểm tra ạ." },
    ],
    result: { label: "Chuyển cho người thật", text: "Đã bàn giao cho nhân viên CSKH · kèm tóm tắt", handoff: true },
  },
};

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --------------------------------------------------------------------------
   Trình phát hội thoại
   -------------------------------------------------------------------------- */
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function attachmentHtml(kind) {
  if (kind === "file") {
    return '<div class="attach"><span class="attach-icon">PDF</span><span>SaoKe_CongNo_T10.pdf<small>12 hóa đơn · 184.500.000đ</small></span></div>';
  }
  if (kind === "chart") {
    const bars = [42, 55, 48, 63, 58, 74, 92];
    return '<div class="mini-chart" role="img" aria-label="Biểu đồ doanh thu 7 ngày, tăng dần">' +
      bars.map((h) => `<span style="height:${h}%"></span>`).join("") + "</div>";
  }
  return "";
}

function createPlayer(root, traceList, noteEl) {
  let runId = 0;
  let current = root.dataset.scenario || "retail";

  const wait = (ms, id) =>
    new Promise((resolve) => setTimeout(() => resolve(id === runId), REDUCED_MOTION ? 0 : ms));

  function buildShell(sc) {
    root.innerHTML = "";
    const head = el("div", "chat-head");
    head.append(
      el("span", "chat-avatar", sc.avatar),
      el("span", "chat-title", `<strong>${sc.title}</strong><span>${sc.subtitle}</span>`),
      el("span", "chat-channel", sc.channel)
    );
    const body = el("div", "chat-body");
    const foot = el("div", "chat-foot", '<span class="chat-foot-idle">AI đang xử lý hội thoại...</span>');
    root.append(head, body, foot);

    if (traceList) {
      traceList.innerHTML = "";
      sc.steps.forEach(([title, detail]) => {
        traceList.append(el("li", "", `<strong>${title}</strong><span>${detail}</span>`));
      });
    }
    if (noteEl) noteEl.textContent = sc.note;
    return { body, foot };
  }

  function addBubble(body, msg) {
    const bubble = el(
      "div",
      `bubble ${msg.from === "user" ? "is-user" : "is-ai"}`,
      `${msg.text}${attachmentHtml(msg.attach)}<time>${msg.time}</time>`
    );
    body.append(bubble);
    body.scrollTop = body.scrollHeight;
  }

  function markSteps(indexes) {
    if (!traceList || !indexes) return;
    indexes.forEach((i) => traceList.children[i]?.classList.add("is-done"));
  }

  async function play(key) {
    const sc = SCENARIOS[key];
    if (!sc) return;
    current = key;
    const id = ++runId;
    const { body, foot } = buildShell(sc);

    for (const msg of sc.messages) {
      if (msg.from === "ai") {
        const typing = el("div", "bubble is-ai is-typing", "<i></i><i></i><i></i>");
        body.append(typing);
        body.scrollTop = body.scrollHeight;
        const alive = await wait(1100, id);
        typing.remove();
        if (!alive) return;
        markSteps(msg.done);
      } else if (!(await wait(900, id))) {
        return;
      }
      addBubble(body, msg);
    }

    if (!(await wait(700, id))) return;
    foot.innerHTML = "";
    foot.append(
      el(
        "div",
        `result${sc.result.handoff ? " is-handoff" : ""}`,
        `<span><small>${sc.result.label}</small>${sc.result.text}</span>`
      )
    );
  }

  return { play, replay: () => play(current) };
}

/* --------------------------------------------------------------------------
   Khởi tạo
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const players = {};

  // Hero chat
  const heroRoot = document.getElementById("hero-chat");
  if (heroRoot) {
    players["hero-chat"] = createPlayer(heroRoot);
    players["hero-chat"].play("retail");
  }

  // Demo chat với các tab tình huống
  const demoRoot = document.getElementById("demo-chat");
  if (demoRoot) {
    const demo = createPlayer(
      demoRoot,
      document.getElementById("demo-trace"),
      document.getElementById("demo-note")
    );
    players["demo-chat"] = demo;
    const tabs = document.querySelectorAll(".scenario-tabs .tab");
    let started = false;

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        started = true;
        tabs.forEach((t) => {
          const active = t === tab;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-selected", String(active));
        });
        demo.play(tab.dataset.scenario);
      });
    });

    // Dựng khung sẵn để phần này không trống trước khi phát
    demoRoot.innerHTML = '<div class="chat-body"></div><div class="chat-foot"></div>';

    // Chỉ bắt đầu phát khi người xem cuộn tới
    const start = () => {
      if (started) return;
      started = true;
      demo.play("retail");
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            start();
            io.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      io.observe(demoRoot);
    } else {
      start();
    }
  }

  document.querySelectorAll("[data-replay]").forEach((btn) => {
    btn.addEventListener("click", () => players[btn.dataset.replay]?.replay());
  });

  // Tab ngành nghề
  const itabs = document.querySelectorAll(".itab");
  itabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      itabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
        document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
      });
    });
  });

  // Menu mobile
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
  }

  applyContactConfig();
  initPlanButtons();
  initLeadForm();
});

/* --------------------------------------------------------------------------
   Thông tin liên hệ lấy từ CONFIG
   -------------------------------------------------------------------------- */
function applyContactConfig() {
  const show = (name) => {
    const block = document.querySelector(`[data-contact-block="${name}"]`);
    if (block) block.hidden = false;
  };

  if (CONFIG.ZALO_URL) {
    document.querySelectorAll('[data-contact="zalo"]').forEach((a) => {
      a.href = CONFIG.ZALO_URL;
      a.target = "_blank";
      a.rel = "noopener";
    });
    show("zalo");
  }
  if (CONFIG.HOTLINE) {
    document.querySelectorAll('[data-contact="hotline"]').forEach((a) => {
      a.href = `tel:${CONFIG.HOTLINE.replace(/[^\d+]/g, "")}`;
      a.textContent = CONFIG.HOTLINE;
    });
    show("hotline");
  }
  if (CONFIG.EMAIL) {
    document.querySelectorAll('[data-contact="email"]').forEach((a) => {
      a.href = `mailto:${CONFIG.EMAIL}`;
      a.textContent = CONFIG.EMAIL;
    });
    show("email");
  }
  if (CONFIG.OFFICE) {
    document.querySelectorAll('[data-contact="office"]').forEach((p) => {
      p.textContent = CONFIG.OFFICE;
    });
    show("office");
  }
}

/* --------------------------------------------------------------------------
   Nút chọn gói: ghi gói đã chọn vào form
   -------------------------------------------------------------------------- */
function initPlanButtons() {
  const input = document.getElementById("f-plan");
  const picked = document.getElementById("plan-picked");
  document.querySelectorAll("[data-plan]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!input || !picked) return;
      input.value = btn.dataset.plan;
      picked.textContent = `Gói quan tâm: ${btn.dataset.plan}`;
      picked.hidden = false;
    });
  });
}

/* --------------------------------------------------------------------------
   Form đăng ký: gửi lead thật, báo lỗi thật
   -------------------------------------------------------------------------- */
function initLeadForm() {
  const form = document.getElementById("lead-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const button = form.querySelector('button[type="submit"]');

  const setStatus = (text, kind) => {
    status.textContent = text;
    status.className = `form-status${kind ? ` is-${kind}` : ""}`;
  };

  form.addEventListener("input", (e) => e.target.classList?.remove("is-invalid"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.elements.name;
    const phone = form.elements.phone;
    const industry = form.elements.industry;
    const phoneDigits = phone.value.replace(/\D/g, "");

    const invalid = [];
    if (name.value.trim().length < 2) invalid.push(name);
    if (phoneDigits.length < 9 || phoneDigits.length > 12) invalid.push(phone);
    if (industry.value.trim().length < 2) invalid.push(industry);

    [name, phone, industry].forEach((f) => f.classList.toggle("is-invalid", invalid.includes(f)));
    if (invalid.length) {
      setStatus(
        invalid.includes(phone) && invalid.length === 1
          ? "Số điện thoại chưa đúng, bạn kiểm tra lại giúp."
          : "Bạn điền đủ ba thông tin giúp nhé.",
        "error"
      );
      invalid[0].focus();
      return;
    }

    if (!CONFIG.LEAD_ENDPOINT) {
      // Chưa cấu hình nơi nhận: không giả vờ thành công.
      console.warn("Form chưa có nơi nhận lead: điền CONFIG.LEAD_ENDPOINT trong script.js.");
      setStatus("Form đăng ký đang tạm ngưng nhận thông tin. Bạn quay lại sau giúp nhé.", "error");
      return;
    }

    const data = new FormData(form);
    data.append("page", location.href);

    button.disabled = true;
    setStatus("Đang gửi...");

    try {
      const res = await fetch(CONFIG.LEAD_ENDPOINT, {
        method: "POST",
        // Gửi dạng form thường để Google Apps Script đọc được qua e.parameter
        body: new URLSearchParams(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();
      if (!result.ok) throw new Error("Endpoint từ chối");

      form.innerHTML =
        '<div class="form-done"><h3>Đã nhận thông tin của bạn</h3>' +
        "<p>Đội kỹ sư Pycom sẽ liên hệ qua Zalo trong giờ làm việc để dựng bản demo trên dữ liệu của bạn.</p></div>";
    } catch (err) {
      button.disabled = false;
      setStatus(
        CONFIG.ZALO_URL
          ? "Gửi chưa được. Bạn thử lại hoặc nhắn Zalo cho chúng tôi."
          : "Gửi chưa được. Bạn thử lại sau ít phút giúp nhé.",
        "error"
      );
    }
  });
}
