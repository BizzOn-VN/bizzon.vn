// ============================================================================
// 1. SECTION 5: INTERACTIVE ZALO MOCK CHAT WIDGET
// ============================================================================
const defaultZaloConversation = [
  {
    sender: "customer",
    text: "Shop ơi, máy lọc nước mã A2 còn hàng ở kho Quận 7 không? Mai ship sáng được không shop?",
    time: "22:15"
  },
  {
    sender: "ai-agent",
    text: `Dạ chào anh Hoàng! Em vừa kiểm kho Q7, mã A2 hiện còn <strong class="text-emerald-400">3 máy</strong> ạ. Bên em có thể giao từ 8h30 - 10h sáng mai cho anh. Anh kiểm tra lại địa chỉ nhận hàng là <code class="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-300">123 Nguyễn Thị Thập</code> đúng không để em lên đơn giữ máy cho mình luôn nhé?`,
    time: "22:15:02 • Đã kiểm kho qua MCP"
  },
  {
    sender: "customer",
    text: "Đúng rồi em, ship luôn nhé.",
    time: "22:15:20"
  },
  {
    sender: "ai-agent",
    text: `Dạ em đã tạo đơn thành công mã <code class="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">#DH-8921</code> trên hệ thống và chuyển đơn sang kho Q7 chuẩn bị hàng sáng mai. Anh theo dõi lộ trình đơn tại đây nhé! Chúc anh buổi tối an lành.`,
    time: "22:15:23 • Đã tạo vận đơn ERP"
  }
];

let replayTimeouts = [];

function renderZaloBubble(msg) {
  const container = document.getElementById("zalo-chat-body");
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.className = `zalo-bubble ${msg.sender}`;
  bubble.innerHTML = `
    ${msg.text}
    <span class="zalo-time ${msg.sender === "customer" ? "text-right" : ""}">${msg.time}</span>
  `;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function replayZaloConversation() {
  const container = document.getElementById("zalo-chat-body");
  if (!container) return;

  replayTimeouts.forEach((t) => clearTimeout(t));
  replayTimeouts = [];
  container.innerHTML = "";

  defaultZaloConversation.forEach((msg, index) => {
    const t = setTimeout(() => {
      renderZaloBubble(msg);
    }, index * 950);
    replayTimeouts.push(t);
  });
}

function getSimulatedAgentReply(userText) {
  const lower = userText.toLowerCase();
  if (lower.includes("công nợ") || lower.includes("mst")) {
    return {
      text: `Dạ em đã tra cứu phần mềm kế toán cho MST <code class="text-cyan-300">0316889921</code> (Đại lý Cấp 1). Tổng công nợ kỳ T11 hiện tại là <strong class="text-emerald-400">42.500.000đ</strong> (Hạn thanh toán: 15/11). Em vừa xuất file PDF sao kê chi tiết gửi đính kèm qua Zalo cho anh/chị rồi ạ!`,
      meta: "Vừa xong • MCP Accounting API (2.1s)"
    };
  }
  if (lower.includes("lịch") || lower.includes("bác sĩ") || lower.includes("khám")) {
    return {
      text: `Dạ em vừa kiểm tra lịch phòng khám: Thứ 7 tuần này lúc <strong>14:00</strong> Bác sĩ Tuấn vẫn còn <strong class="text-emerald-400">01 khung giờ trống</strong> ạ. Em đã giữ lịch hẹn mã <code class="text-cyan-300">#APT-409</code> cho mình và sẽ tự động nhắn Zalo nhắc hẹn trước 2 tiếng nhé!`,
      meta: "Vừa xong • MCP Booking Engine (1.9s)"
    };
  }
  if (lower.includes("bảo hành") || lower.includes("đổi trả") || lower.includes("lỗi")) {
    return {
      text: `Theo <strong class="text-cyan-300">Sổ tay Chính sách Bảo hành (Mục 3.1 - Trang 12)</strong>: Sản phẩm phát sinh lỗi kỹ thuật từ nhà sản xuất trong <strong>15 ngày đầu</strong> sẽ được <strong class="text-emerald-400">Đổi mới 1-1 miễn phí tận nơi</strong>. Anh/chị đọc giúp em SĐT mua hàng để em tạo phiếu thu hồi ngay nhé!`,
      meta: "Vừa xong • GraphRAG Neo4j + Qdrant (1.5s)"
    };
  }
  return {
    text: `Dạ Pycom AI Agent đã tiếp nhận yêu cầu: <em>"${userText}"</em>. Hệ thống đã tự động tra cứu kho tri thức <strong>GraphRAG</strong> và kiểm tra <strong>Database qua MCP</strong> trong 2.1 giây — sẵn sàng lên đơn hoặc trích xuất báo cáo ngay trên Zalo mà không cần nhân sự gõ phím!`,
    meta: "Vừa xong • Autonomous MCP Execution"
  };
}

function sendPresetQuestion(questionText) {
  const input = document.getElementById("zalo-user-input");
  if (input) input.value = questionText.trim();
  handleCustomZaloMessage(new Event("submit"));
}

function handleCustomZaloMessage(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById("zalo-user-input");
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  input.value = "";

  const now = new Date();
  const timeStr =
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0");

  renderZaloBubble({
    sender: "customer",
    text: text,
    time: timeStr
  });

  const reply = getSimulatedAgentReply(text);
  setTimeout(() => {
    renderZaloBubble({
      sender: "ai-agent",
      text: reply.text,
      time: reply.meta
    });
  }, 650);
}

// ============================================================================
// 2. SECTION 6: INDUSTRY USE CASES INTERACTIVE TABS
// ============================================================================
const industryUseCases = [
  {
    badge: "Tab 1 • Retail, F&B, Cosmetics & Fashion",
    title: "Bán lẻ & Chuỗi Cửa Hàng (F&B, Mỹ Phẩm, Thời Trang)",
    execution:
      "Trả lời công dụng, tồn kho từng chi nhánh, giá theo phân loại size/màu; tự tạo đơn và xin thông tin giao hàng ngay trên Zalo.",
    result:
      "Giảm 90% thời gian phản hồi, tăng gấp đôi tỷ lệ chốt đơn ban đêm mà không cần thuê thêm nhân sự trực page.",
    metrics: [
      { value: "-90%", label: "Thời gian phản hồi khách" },
      { value: "2X", label: "Tỷ lệ chốt đơn khung 22h - 6h sáng" }
    ],
    workflowSteps: [
      "Khách gửi ảnh sản phẩm hoặc hỏi mẫu trên Zalo OA",
      "AI tra cứu công dụng + kiểm tra tồn kho size/màu qua POS API (MCP)",
      "AI tự áp mã voucher thành viên & tạo vận đơn giao hàng tức thì"
    ]
  },
  {
    badge: "Tab 2 • Healthcare, Dental Clinic & Spa",
    title: "Phòng Khám, Nha Khoa, Thẩm Mỹ Viện & Spa",
    execution:
      "Tư vấn quy trình điều trị chuẩn xác từ tài liệu y khoa nội bộ; kiểm tra lịch trống của bác sĩ/kỹ thuật viên và tự book lịch; tự động gửi tin nhắn Zalo nhắc khách trước ngày hẹn.",
    result:
      "Không còn tình trạng trùng lịch hẹn, giảm tối đa tỷ lệ khách 'bỏ bom' hẹn (No-show) nhờ cơ chế nhắc lịch tự động.",
    metrics: [
      { value: "0%", label: "Tình trạng đặt trùng lịch bác sĩ" },
      { value: "-65%", label: "Tỷ lệ khách quên/bỏ hẹn (No-show)" }
    ],
    workflowSteps: [
      "Khách hỏi triệu chứng hoặc gói liệu trình trên Zalo",
      "AI trích xuất đúng phác đồ tư vấn từ tài liệu Y khoa nội bộ (RAG)",
      "AI kiểm tra slot trống của Bác sĩ qua HIS/CRM & đặt lịch + hẹn giờ nhắc"
    ]
  },
  {
    badge: "Tab 3 • Wholesale, Manufacturing & B2B Distribution",
    title: "Bán Buôn (Wholesale), Sản Xuất & Phân Phối B2B",
    execution:
      "Đại lý chỉ cần nhắn Mã số thuế qua Zalo → AI tự đối soát hóa đơn trên phần mềm kế toán và gửi sao kê công nợ trong 3 giây; báo giá đúng cấp bậc chiết khấu đại lý.",
    result:
      "Kế toán không còn bị tra tấn bởi hàng trăm cuộc gọi đòi bảng công nợ và kiểm tra chiết khấu mỗi ngày.",
    metrics: [
      { value: "3 Giây", label: "Xuất & gửi sao kê công nợ tự động" },
      { value: "100%", label: "Chính xác theo bậc chiết khấu đại lý" }
    ],
    workflowSteps: [
      "Đại lý nhắn Mã số thuế hoặc mã đơn đặt hàng (PO) trên Zalo",
      "AI truy vấn ERP/Misa/Bravo qua MCP kiểm tra hạn mức & bậc chiết khấu",
      "AI xuất bảng đối chiếu công nợ PDF và lên đơn sỉ tự động"
    ]
  },
  {
    badge: "Tab 4 • Education, K-12 Schools & Training Centers",
    title: "Giáo Dục, Trường Học Liên Cấp & Trung Tâm Đào Tạo",
    execution:
      "Tư vấn chính xác biểu phí, lộ trình song ngữ, tuyến xe đưa đón theo Sổ tay phụ huynh; tự động thu thập thông tin và chấm điểm phụ huynh tiềm năng (Lead Scoring) để chuyển sale chốt hẹn.",
    result:
      "Tuyển sinh tự động 24/7, sàng lọc lead chất lượng cao mà không bỏ sót bất kỳ câu hỏi nào của phụ huynh.",
    metrics: [
      { value: "24/7", label: "Tư vấn tuyển sinh & biểu phí chuẩn xác" },
      { value: "+85%", label: "Tỷ lệ lọc Lead phụ huynh chất lượng cao" }
    ],
    workflowSteps: [
      "Phụ huynh hỏi học phí, ưu đãi nhập học hoặc lộ trình đào tạo",
      "AI trả lời chuẩn 100% theo Sổ tay Phụ huynh & Quy chế tuyển sinh (RAG)",
      "AI thu thập độ tuổi học sinh, chấm điểm Lead và đẩy thông báo cho Tư vấn viên"
    ]
  },
  {
    badge: "Tab 5 • Accounting, Tax, Legal & Real Estate",
    title: "Doanh Nghiệp Dịch Vụ, Kế Toán - Thuế, Pháp Lý, BĐS",
    execution:
      "Trợ lý nội bộ trả lời ngay lập tức các câu hỏi về hợp đồng, thông tư thuế, bảng hàng bất động sản, hoa hồng dự án kèm trích dẫn văn bản gốc rõ ràng.",
    result:
      "Nhân viên mới làm việc chuẩn xác ngay từ tuần đầu tiên, không cần liên tục làm phiền quản lý hay sếp.",
    metrics: [
      { value: "Tuần Đầu", label: "Nhân sự mới nắm bắt 100% nghiệp vụ" },
      { value: "100%", label: "Câu trả lời có trích dẫn điều khoản gốc" }
    ],
    workflowSteps: [
      "Nhân viên sale/tư vấn hỏi điều khoản hợp đồng, thuế hoặc giỏ hàng BĐS",
      "GraphRAG (Neo4j + Qdrant) đối chiếu hàng trăm thông tư, hợp đồng PDF",
      "Trả về câu trả lời kèm số trang, điều khoản gốc và căn hộ còn trống"
    ]
  }
];

function selectIndustryTab(index) {
  const buttons = document.querySelectorAll(".industry-tab-btn");
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  const data = industryUseCases[index];
  const panel = document.getElementById("industry-panel");
  if (!panel || !data) return;

  panel.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <!-- Left Info -->
      <div class="lg:col-span-7 space-y-5">
        <span class="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          ${data.badge}
        </span>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          ${data.title}
        </h3>

        <div class="space-y-4 pt-1">
          <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div class="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-1">
              ⚙️ Thực Thi Tự Động (Agent Execution)
            </div>
            <p class="text-slate-200 text-sm sm:text-base leading-relaxed">
              ${data.execution}
            </p>
          </div>

          <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-1">
              🏆 Kết Quả Thực Tế (Business Impact)
            </div>
            <p class="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              ${data.result}
            </p>
          </div>
        </div>

        <div class="pt-2">
          <a href="#dang-ky-demo" onclick="prefillPackage('${data.title}')" class="btn-glow px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2">
            <span>Nhận Demo Ngành ${data.title.split("(")[0].trim()} ➔</span>
          </a>
        </div>
      </div>

      <!-- Right Workflow & Impact Metrics -->
      <div class="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div class="grid grid-cols-2 gap-4">
          ${data.metrics
            .map(
              (m) => `
            <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <div class="text-2xl sm:text-3xl font-extrabold text-emerald-400">${m.value}</div>
              <div class="text-xs text-slate-400 mt-1">${m.label}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <div>
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            LUỒNG XỬ LÝ TỰ ĐỘNG (ZALO + RAG + MCP):
          </div>
          <div class="space-y-3">
            ${data.workflowSteps
              .map(
                (step, idx) => `
              <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                <span class="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center shrink-0">
                  ${idx + 1}
                </span>
                <span>${step}</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 3. SECTION 10: SMOOTH FAQ ACCORDION
// ============================================================================
function toggleFaqItem(btn) {
  const card = btn.closest(".faq-card");
  const content = card.querySelector(".faq-content");
  const isOpen = card.classList.contains("open");

  document.querySelectorAll(".faq-card").forEach((c) => {
    c.classList.remove("open");
    const body = c.querySelector(".faq-content");
    if (body) body.style.maxHeight = null;
  });

  if (!isOpen) {
    card.classList.add("open");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// ============================================================================
// 4. SECTION 11: LEAD FORM PREFILL & SUBMISSION
// ============================================================================
function prefillPackage(text) {
  const input = document.getElementById("industry-input");
  if (input) {
    input.value = text;
    input.focus();
  }
}

function handleLeadSubmit(e) {
  e.preventDefault();
  const form = document.getElementById("lead-capture-form");
  if (!form) return;

  form.innerHTML = `
    <div class="p-8 rounded-2xl bg-slate-950/90 border border-emerald-500/50 text-center space-y-4">
      <div class="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-2xl flex items-center justify-center mx-auto">
        ✓
      </div>
      <h3 class="text-xl sm:text-2xl font-extrabold text-white">
        Đăng Ký Nhận Bản Demo Thành Công!
      </h3>
      <p class="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
        Đội ngũ kỹ sư <strong>Pycom Enterprise Platform</strong> đã nhận thông tin và sẽ liên hệ qua Zalo của bạn trong vòng 15 phút để thiết lập bản Demo trực tiếp trên dữ liệu của bạn.
      </p>
    </div>
  `;
}

// Initialize Industry Tab 0 on load
document.addEventListener("DOMContentLoaded", () => {
  selectIndustryTab(0);
});
