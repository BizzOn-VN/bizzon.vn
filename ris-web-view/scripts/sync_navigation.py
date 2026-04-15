import os
import re

# Directory containing the HTML files
ROOT_DIR = "/Users/hungtruong/Documents/ANTIGRAVITY/TD-RIS/"

# Files to exclude (login, forgot password, etc.)
EXCLUDE_FILES = [
    "login.html", 
    "forgot-passwork.html", 
    "trash_box_login.html", 
    "trashbox_forgot-passwork.html",
    "customerview.html" # Assuming customer view is different
]

# Mapping of menu items to active states
MAPPING = {
    "work-list.html": "worklist",
    "work-list-2.html": "worklist",
    "analytic.html": "reporting",
    "ActivityAnalytics.html": "dashboard",
    "admin-tab.html": "setting",
    "user-listing.html": "user",
    "patient-listing.html": "patients",
    "docter-analytic.html": "doctors",
    "study.html": "chỉ-định",
    "hospital.html": "hospital",
    "address.html": "level-address",
}

# Mapping of filenames to Title tags
TITLE_MAPPING = {
    "work-list.html": "TD-RIS | Worklist",
    "analytic.html": "TD-RIS | Analytics & Reporting",
    "patient-listing.html": "TD-RIS | Patient Management",
    "user-listing.html": "TD-RIS | User Management",
    "ActivityAnalytics.html": "TD-RIS | Dashboard",
    "admin-tab.html": "TD-RIS | System Settings",
    "hospital.html": "TD-RIS | Hospital Management",
    "address.html": "TD-RIS | Address Settings",
    "study.html": "TD-RIS | Study Management",
    "biliing.html": "TD-RIS | Billing System",
    "login.html": "TD-RIS | Login",
    "profile.html": "TD-RIS | User Profile",
    "notification-detail.html": "TD-RIS | Notifications",
}

def get_title(filename):
    if filename in TITLE_MAPPING:
        return TITLE_MAPPING[filename]
    # Fallback: Prettify filename
    name = filename.replace(".html", "").replace("-", " ").replace("_", " ").title()
    return f"TD-RIS | {name}"

# Canonical blocks
HEADER_BLOCK = """<header class="page-header page-header-hlc">
  <div class="logo logo-hl">
  	<a href="work-list.html">
  		<img src="./images/logo.png" alt="">
  		<h1>Bringing you the simplest experience</h1>
  	</a>
  	<div class="ico-close-sidebar">
  		<img src="./images/icon-breadcrumb.png" alt="">
  	</div>
  </div>
  <div class="fl-right">
  	<div class="form-search">
  		<form action="">
  			<div class="md-row">
  				<input class="input-search" type="search" placeholder="Tìm kiếm...">
  				<input class="input-submit" type="submit" value="">
  			</div>
  		</form>
  	</div>
  	<div class="right-meta">
  		<div class="notification">
  			<div class="ico-bell" onclick="open_sub_notification(this)">
  				<img src="./images/ico-bell.png" alt="">
  				<div class="had-notification"></div>
  			</div>
        <div class="sub-notification">
          <div class="noti-top clearfix">
               <span id="noti-view" class="pull-left"><span>78</span>Thông báo</span>
               <a class="pull-right" onclick="readAllNotification();">Đánh dấu tất cả đã đọc</a>
           </div>
           <div class="content-noti">
            <div class="md-scroll-xy" style="max-height: calc(100vh - 170px)">
               <ul>
                <li onclick="active_checkbox(this);">
                  <label for="">
                    <div class="info">Bạn có 1 bệnh nhân (Trịnh Nam Thao) chờ duyệt.Bạn có 1 bệnh nhân (Trịnh Nam Thao)</div>
                    <div class="blk-date">
                       <span>11/9/2019 14:46</span>
                    </div>
                  </label>
                  <div class="check-box">
                    <input type="radio" id="demo1" name="" value="" checked>
                  </div>
                </li>
                <li onclick="active_checkbox(this);">
                  <label for="">
                    <div class="info">Bạn có 1 bệnh nhân (Trịnh Nam Thao) chờ duyệt.</div>
                    <div class="blk-date">
                       <span>11/9/2019 14:46</span>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div class="noti-bottom">
              <a id="view-all" class="pull-left" href="/notification-detail.html" target="_blank">Xem tất cả</a>
            </div>
           </div>
        </div>
  		</div>
      <div class="select-language">
        <div class="ui compact selection dropdown">
          <i class="dropdown icon"></i>
          <div class="text"><img src="./images/en-flag.png" alt=""></div>
          <div class="menu">
            <div class="item"><a href="#"><img src="./images/vn-flag.png" alt=""></a></div>
            <div class="item"><a href="#"><img src="./images/en-flag.png" alt=""></a></div>
          </div>
        </div>
      </div>
  		<div class="account" onclick="account_click(this)">
        <div class="text">
          <span>Welcome,<strong>Thiên Lý</strong></span>
        </div>
        <div class="avatar">
          <img src="./images/avatar.jpg" alt="">
        </div>
         <ul class="menu-content">
          <li><a href="profile.html">Thông tin tài khoản</a></li>
          <li><a href="#">Đổi mật khẩu</a></li>
          <li class="log-out"><a href="login.html">Đăng xuất</a></li>
        </ul>
      </div>
  	</div>
  </div>
</header>
<!-- /.page-header -->"""

SIDEBAR_MAIN_TEMPLATE = """<div class="sidebar-worklist" id="sidebar-worklist">
	<div class="inner">
		<div class="icon-logo">
			<a href="work-list.html">
				<img src="./images/icon-logo.png" alt="">
			</a>
		</div>
		<div class="navbar-link">
			<ul>
				<li><a class="nav-ge" href="#">GE</a></li>
				<li><a class="text-revert {active_worklist}" href="work-list.html">Worklist</a></li>
				<li><a class="text-revert {active_reporting}" href="analytic.html">Reporting</a></li>
				<li><a class="text-revert {active_dashboard}" href="ActivityAnalytics.html">Dashboard</a></li>
        <li><a class="text-revert {active_setting}" href="admin-tab.html">Setting</a></li>
			</ul>
		</div>
	</div>
</div>"""

SIDEBAR_SUB_TEMPLATE = """<div class="blk-worklist" id="blk-worklist">
    <div class="top-title">
        <img class="icon" src="./images/icon-worklist.png" alt="">
        <span>Worklist</span>
    </div>
    <div class="item">
        <div class="control active" onclick="slide_toggle_item_blk_worklist(this)">
            <img class="icon" src="./images/icon-management.png" alt="">
            <span>Management</span>
        </div>
        <ul>
            <li><a class="{active_user}" href="user-listing.html">User</a></li>
            <li><a class="{active_patients}" href="patient-listing.html">Patients</a></li>
            <li><a class="{active_doctors}" href="docter-analytic.html">Doctors</a></li>
            <li><a class="{active_chi_dinh}" href="study.html">Chỉ định</a></li>
            <li><a class="{active_technicians}" href="#">Technicians</a></li>
            <li><a class="{active_modality}" href="#">Modality</a></li>
            <li><a class="{active_hospital}" href="hospital.html">Hospital</a></li>
            <li><a class="{active_level_address}" href="address.html">Level Address</a></li>
        </ul>
    </div>
    <div class="item">
        <div class="control" onclick="slide_toggle_item_blk_worklist(this)">
            <img class="icon" src="./images/icon-setting.png" alt="">
            <span>Setting</span>
        </div>
        <ul>
            <li><a href="#">Template Report</a></li>
            <li><a href="#">Setting Report</a></li>
            <li><a href="#">Parameters</a></li>
            <li><a href="admin-tab.html">Settings</a></li>
            <li><a href="#">Connection Service</a></li>
            <li><a href="#">Setting server</a></li>
        </ul>
    </div>
</div>"""

def find_balanced_tag(content, start_index, tag_open="<div", tag_close="</div>"):
    # Extremely simple balancer for common cases
    # We find the start of the tag and then count opens/closes
    cursor = start_index + len(tag_open)
    depth = 1
    while depth > 0 and cursor < len(content):
        next_open = content.find(tag_open, cursor)
        next_close = content.find(tag_close, cursor)
        
        if next_close == -1:
            break
            
        if next_open != -1 and next_open < next_close:
            depth += 1
            cursor = next_open + len(tag_open)
        else:
            depth -= 1
            cursor = next_close + len(tag_close)
    return cursor

def sync_file(filename):
    filepath = os.path.join(ROOT_DIR, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        return

    basename = os.path.basename(filename)
    active_key = MAPPING.get(basename, "")
    
    # Generate blocks with active states
    sidebar_main = SIDEBAR_MAIN_TEMPLATE.format(
        active_worklist="active" if active_key == "worklist" else "",
        active_reporting="active" if active_key == "reporting" else "",
        active_dashboard="active" if active_key == "dashboard" else "",
        active_setting="active" if active_key == "setting" else ""
    )
    
    sidebar_sub = SIDEBAR_SUB_TEMPLATE.format(
        active_user="active" if active_key == "user" else "",
        active_patients="active" if active_key == "patients" else "",
        active_doctors="active" if active_key == "doctors" else "",
        active_chi_dinh="active" if active_key == "chỉ-định" else "",
        active_technicians="",
        active_modality="",
        active_hospital="active" if active_key == "hospital" else "",
        active_level_address="active" if active_key == "level-address" else ""
    )

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # --- TITLE PHASE ---
    page_title = get_title(basename)
    content = re.sub(r'<title>.*?</title>', f'<title>{page_title}</title>', content, flags=re.IGNORECASE)

    # --- CLEANUP PHASE ---
    # Remove all headers
    content = re.sub(r'<header class="page-header.*?</header>\s*(<!-- /.page-header -->)?', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove all sidebar-worklist blocks
    while True:
        match = re.search(r'<div[^>]*class="sidebar-worklist[^>]*>', content, flags=re.IGNORECASE)
        if not match:
            break
        idx = match.start()
        end_idx = find_balanced_tag(content, idx)
        print(f"  Cleaning up sidebar-worklist at {idx}:{end_idx}")
        content = content[:idx] + content[end_idx:]

    # Remove all blk-worklist blocks
    while True:
        match = re.search(r'<div[^>]*class="blk-worklist[^>]*>', content, flags=re.IGNORECASE)
        if not match:
            break
        idx = match.start()
        end_idx = find_balanced_tag(content, idx)
        print(f"  Cleaning up blk-worklist at {idx}:{end_idx}")
        content = content[:idx] + content[end_idx:]

    # Cleanup any leftover loose sidebar-worklist or blk-worklist IDs just in case
    content = re.sub(r'<!-- /.page-header -->', '', content, flags=re.IGNORECASE)

    # --- INSERT PHASE ---
    # Insert Header + Sidebar Main after <body>
    body_idx = content.find('<body')
    if body_idx != -1:
        # Move past the <body ...> tag
        body_end_idx = content.find('>', body_idx) + 1
        content = content[:body_end_idx] + "\n" + HEADER_BLOCK + "\n" + sidebar_main + "\n" + content[body_end_idx:]
    
    # Insert Sidebar Sub at the start of <main>
    main_idx = content.find('<main')
    if main_idx != -1:
        main_end_idx = content.find('>', main_idx) + 1
        content = content[:main_end_idx] + "\n" + sidebar_sub + "\n" + content[main_end_idx:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Synced: {filename}")

if __name__ == "__main__":
    files = [f for f in os.listdir(ROOT_DIR) if f.endswith(".html")]
    for f in files:
        if f in EXCLUDE_FILES:
            # ONLY Sync TITLE for excluded files
            filepath = os.path.join(ROOT_DIR, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            page_title = get_title(f)
            content = re.sub(r'<title>.*?</title>', f'<title>{page_title}</title>', content, flags=re.IGNORECASE)
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Title updated: {f}")
        else:
            # Full Sync for other files
            sync_file(f)
