document.addEventListener('DOMContentLoaded', () => {
    // STATE
    const receipts = [
        createDefaultReceipt(1),
        createDefaultReceipt(2),
        createDefaultReceipt(3),
        createDefaultReceipt(4),
        createDefaultReceipt(5),
        createDefaultReceipt(6)
    ];

    let currentTabIndex = 0;

    // DOM ELEMENTS
    const tabBtns = document.querySelectorAll('.tab-btn');
    const studentNameInput = document.getElementById('studentName');
    const monthInput = document.getElementById('month');
    const teacherNameInput = document.getElementById('teacherName');
    const bankInfoInput = document.getElementById('bankInfo');
    const feeItemsContainer = document.getElementById('fee-items');
    const deductionItemsContainer = document.getElementById('deduction-items');
    const addFeeBtn = document.getElementById('add-fee-btn');
    const addDeductionBtn = document.getElementById('add-deduction-btn');
    const printBtn = document.getElementById('print-btn');
    const receiptTemplate = document.getElementById('receipt-template');

    // INITIALIZATION
    initializePreviews();
    renderForm();
    setupGlobalListeners();
    updatePreview(0);
    updatePreview(1);
    updatePreview(2);
    updatePreview(3);
    updatePreview(4);
    updatePreview(5);

    // FUNCTIONS

    function createDefaultReceipt(id) {
        return {
            studentName: '',
            month: '2',
            teacherName: 'Sunshine',
            bankInfo: 'Số TK: Doan Ngoc Lieu | 19050920815012 | Techcombank | Ba mẹ vui lòng KHÔNG ghi nội dung chuyển khoản',
            fees: [
                { desc: 'Học + tiền tiểu học', amount: 1900000 },
                { desc: 'Sách tập kỳ 2', amount: 100000 },
                { desc: 'Quà + tiệc tất niên', amount: 100000 }
            ],
            deductions: [
                { desc: 'Nghỉ Tết 1 tuần', amount: 300000 }
            ]
        };
    }

    function initializePreviews() {
        // Clone template into the 4 receipt slots
        for (let i = 0; i < 6; i++) {
            const container = document.getElementById(`receipt-${i}`);
            container.dataset.id = i + 1;
            const content = receiptTemplate.content.cloneNode(true);
            container.appendChild(content);
        }
    }

    function switchTab(index) {
        // Update Tabs UI
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabBtns[index].classList.add('active');

        currentTabIndex = index;

        // Update Active Receipt Highlight
        document.querySelectorAll('.receipt').forEach(r => r.classList.remove('active-receipt'));
        const activeReceipt = document.getElementById(`receipt-${index}`);
        if (activeReceipt) {
            activeReceipt.classList.add('active-receipt');
            // Auto-scroll to view
            activeReceipt.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        renderForm(); // Load data for this receipt into form
    }

    // Initialize with Receipt 1 active
    switchTab(0);

    function renderForm() {
        const data = receipts[currentTabIndex];

        // basic fields
        studentNameInput.value = data.studentName;
        monthInput.value = data.month;
        teacherNameInput.value = data.teacherName;
        bankInfoInput.value = data.bankInfo;

        // dynamic items
        feeItemsContainer.innerHTML = '';
        data.fees.forEach((item, idx) => {
            const row = createItemRow(item.desc, item.amount, 'fee', idx);
            feeItemsContainer.appendChild(row);
        });

        deductionItemsContainer.innerHTML = '';
        data.deductions.forEach((item, idx) => {
            const row = createItemRow(item.desc, item.amount, 'deduction', idx);
            deductionItemsContainer.appendChild(row);
        });
    }

    function saveState() {
        // Reads form and saves to receipts[currentTabIndex]
        const data = receipts[currentTabIndex];

        data.studentName = studentNameInput.value;
        data.month = monthInput.value;
        data.teacherName = teacherNameInput.value;
        data.bankInfo = bankInfoInput.value;

        // Fee items
        data.fees = [];
        feeItemsContainer.querySelectorAll('.item-row').forEach(row => {
            const rawVal = parseFloat(row.querySelector('.item-amount').value) || 0;
            data.fees.push({
                desc: row.querySelector('.item-desc').value,
                amount: rawVal * 1000 // Multiply by 1000
            });
        });

        // Deduction items
        data.deductions = [];
        deductionItemsContainer.querySelectorAll('.item-row').forEach(row => {
            const rawVal = parseFloat(row.querySelector('.item-amount').value) || 0;
            data.deductions.push({
                desc: row.querySelector('.item-desc').value,
                amount: rawVal * 1000 // Multiply by 1000
            });
        });
    }

    function createItemRow(descVal, amountVal, type, index) {
        const div = document.createElement('div');
        div.className = 'item-row';
        // Divide by 1000 for display, handle 0
        const displayAmount = (amountVal !== undefined && amountVal !== null) ? amountVal / 1000 : 0;

        div.innerHTML = `
            <input type="text" class="item-desc" value="${descVal || ''}" placeholder="Mô tả">
            <input type="number" class="item-amount" value="${displayAmount}" placeholder="Số tiền (nghìn)">
            <button class="btn-remove">×</button>
        `;

        const inputs = div.querySelectorAll('input');
        inputs.forEach(input => input.addEventListener('input', () => {
            saveState();
            updatePreview(currentTabIndex);
        }));

        div.querySelector('.btn-remove').addEventListener('click', () => {
            div.remove();
            saveState();
            updatePreview(currentTabIndex);
        });

        return div;
    }

    function setupGlobalListeners() {
        // Tabs
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.index);
                switchTab(idx);
            });
        });

        // Main Inputs
        [studentNameInput, monthInput, teacherNameInput, bankInfoInput].forEach(input => {
            input.addEventListener('input', () => {
                saveState();
                updatePreview(currentTabIndex);
            });
        });

        // Add Buttons
        addFeeBtn.addEventListener('click', () => {
            const row = createItemRow('', 0, 'fee');
            feeItemsContainer.appendChild(row);
            // No need to save state yet, empty row doesn't hurt, or we can save:
            saveState(); // Update state to include empty item
        });

        addDeductionBtn.addEventListener('click', () => {
            const row = createItemRow('', 0, 'deduction');
            deductionItemsContainer.appendChild(row);
            saveState();
        });

        // Print
        printBtn.addEventListener('click', () => window.print());

        // Warn on page unload
        // Warn on page unload
        window.addEventListener('beforeunload', (e) => {
            // Check if any data has changed - for now we just warn always
            // Standard approach for modern browsers
            e.preventDefault();
            e.returnValue = 'Bạn có chắc chắn muốn rời khỏi trang không? Dữ liệu chưa lưu sẽ bị mất.';
            return e.returnValue;
        });
    }

    function formatCurrency(num) {
        return new Intl.NumberFormat('vi-VN').format(num);
    }

    function formatName(str) {
        if (!str) return '';
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    function updatePreview(index) {
        const data = receipts[index];
        const container = document.getElementById(`receipt-${index}`);

        if (!container) return;

        // Update Text
        container.querySelector('.student-name-display').textContent = formatName(data.studentName) || '......................................................';
        container.querySelector('.display-month').textContent = data.month || '...';
        container.querySelector('.display-teacherName').textContent = data.teacherName || 'Cô Nhi';
        container.querySelector('.display-bankInfo').innerHTML = (data.bankInfo || '').replace(/\n/g, '<br>');

        // Update Tables
        const feeBody = container.querySelector('.display-fee-items');
        const deductionBody = container.querySelector('.display-deduction-items');
        const totalEl = container.querySelector('.total-amount');

        feeBody.innerHTML = '';
        deductionBody.innerHTML = '';

        let total = 0;

        data.fees.forEach(item => {
            if (item.desc || item.amount !== 0) {
                total += item.amount;
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>+ ${item.desc}</td><td>${formatCurrency(item.amount)}</td>`;
                feeBody.appendChild(tr);
            }
        });

        data.deductions.forEach(item => {
            const amount = Math.abs(item.amount);
            if (item.desc || amount !== 0) {
                total -= amount;
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${item.desc}</td><td>-${formatCurrency(amount)}</td>`;
                deductionBody.appendChild(tr);
            }
        });

        totalEl.textContent = formatCurrency(total);
    }
});
