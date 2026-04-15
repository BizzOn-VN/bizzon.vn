// 'use strict';
// $("#popup-data-permission").fancybox().trigger('click');
// $("#popup-wrong").fancybox().trigger('click');
 // $(".button-popup-hopital").trigger('click'); 
/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );

// $("body").click(function(){
//   $.fancybox.close();
// })
//***************function popup.............
function active_checkbox(e){
 $(e).find("input").attr('checked', true);
 // alert("a");
}
// function height_table_telephone(){
//   if ($(window).height()>600) {
//     var window_height=$(window).height()
//     -$(".page-header").outerHeight()
//     -$(".page-work-list .blk-table-admin .meta-top").outerHeight()
//     $(".table-telephone").css("height",window_height);
//   }else{
//     var window_height=$(document).height()
//     -$(".page-header").outerHeight()
//     -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -25
//     $(".spitter-ml3").css("height",window_height);
//   }
// }
function onpen_smd_popup(){
  $(".smd-popup").addClass("popup-active");
  $(".bg-opacity").addClass("bg-active");
}
function close_smd_popup(e){
  $(e).closest(".smd-popup").removeClass("popup-active");
  $(".bg-opacity").removeClass("bg-active");
}
function open_sub_notification(e){
  $(e).siblings(".sub-notification").toggleClass("active_notification");
}
function open_sub_layout(e){
  $(e).children(".sub-ct").toggleClass("active");
}
$(document).mouseup(function(e) 
{
    var container = $(".sub-ct");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".sub-ct").removeClass("active");
    }
});
function open_sub_meta_header(e){
  $(e).siblings(".sub_meta_header").toggleClass("active_sub_meta_header");
}
$(document).mouseup(function(e) 
{
    var container = $(".smd_sub_meta_header");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".sub_meta_header").removeClass("active_sub_meta_header");
    }
});
$(document).mouseup(function(e) 
{
    var container = $(".notification");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".sub-notification").removeClass("active_notification");
    }
});


$(".smd-popup-close").click(function(){
  $(this).parents(".smd-popup").removeClass("popup-active");
  $(".bg-opacity").removeClass("bg-active");
})

$(".button-close-popup").click(function(){
  var data_src=$(this).attr('data-popup');
  $(data_src).removeClass("popup-active");
  $(".bg-opacity").removeClass("bg-active");
})
$("[data-popup]").click(function(){
   var data_src=$(this).attr('data-popup');
    $(data_src).addClass("popup-active");
    $(".bg-opacity").addClass("bg-active");
})



//function  open popup
function trigger_onpen_popup() {
  $("#them-chi-dinh").addClass("popup-active");
  $(".bg-opacity").addClass("bg-active");
}
// trigger_onpen_popup();
//function clos popup
function trigger_close_smd_popup(){
  $(".smd-popup").removeClass("popup-active");
  $(".bg-opacity").removeClass("bg-active");
}
// trigger_close_smd_popup();
//***************end function popup.............


//*************** function call onscroll.............
$(".smd-popup").on( 'scroll', function(){
   console.log('scroll đang chạy');
});
//***************end function call onscroll.............

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],

    [{ 'color': [] }, { 'background': [] }], 
    [{ 'align': [] }]
  ];
  if ($(".page-main").hasClass("page-reporting")) {
    var quill=new Quill('.quill-editor-call-1',{
      modules:{
        toolbar:toolbarOptions
      },
      theme:"snow"
    })
    var quill=new Quill('.quill-editor-call-2',{
      modules:{
        toolbar:toolbarOptions
      },
      theme:"snow"
    })
     var quill=new Quill('.quill-editor-call-3',{
      modules:{
        toolbar:toolbarOptions
      },
      theme:"snow"
    })
      var quill=new Quill('.quill-editor-call-4',{
      modules:{
        toolbar:toolbarOptions
      },
      theme:"snow"
    })
    //  var quill=new Quill('.tab-1-editor-2',{
    //   modules:{
    //     toolbar:toolbarOptions
    //   },
    //   theme:"snow"
    // })
    // var quill=new Quill('.tab-2-editor-1',{
    //   modules:{
    //     toolbar:toolbarOptions
    //   },
    //   theme:"snow"
    // }) 
    // var quill=new Quill('.tab-2-editor-2',{
    //   modules:{
    //     toolbar:toolbarOptions
    //   },
    //   theme:"snow"
    // }) 
    // var quill=new Quill('.tab-3-editor-1',{
    //   modules:{
    //     toolbar:toolbarOptions
    //   },
    //   theme:"snow"
    // }) 
    // var quill=new Quill('.tab-3-editor-2',{
    //   modules:{
    //     toolbar:toolbarOptions
    //   },
    //   theme:"snow"
    // }) 
  }
  // if ($(".page-main").hasClass("page-reporting")) {
  //   var quill = new Quill('.quill-editor', {
  //     modules: {
  //       toolbar: [
  //         [{ header: [1, 2, false] }],
  //         ['bold', 'italic', 'underline'],
  //         ['image', 'code-block']
  //       ]
  //     },
  //     placeholder: '',
  //     theme: 'snow'  // or 'bubble'
  //   });
  // }  
$('.ui.checkbox').checkbox();

// $("[data-fancybox]").fancybox({
//     touch: false,
//     clickSlide: false
//   });
  $('selector').fancybox({
  touch: false
});
(function($) {

  var Defaults = $.fn.select2.amd.require('select2/defaults');
  
  $.extend(Defaults.defaults, {
    dropdownPosition: 'auto'
  });
  
  var AttachBody = $.fn.select2.amd.require('select2/dropdown/attachBody');
  
  var _positionDropdown = AttachBody.prototype._positionDropdown;
  
  AttachBody.prototype._positionDropdown = function() {
   
    var $window = $(window);
   
    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
   
    var newDirection = null;
   
    var offset = this.$container.offset();
   
    offset.bottom = offset.top + this.$container.outerHeight(false);
    
    var container = {
        height: this.$container.outerHeight(false)
    };
    
    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);
    
    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top
    css.left -= parentOffset.left;
    
    var dropdownPositionOption = this.options.get('dropdownPosition');
    
    if (dropdownPositionOption === 'above' || dropdownPositionOption === 'below') {
    
        newDirection = dropdownPositionOption;
    
    } else {
        
        if (!isCurrentlyAbove && !isCurrentlyBelow) {
            newDirection = 'below';
        }

        if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
          newDirection = 'above';
        } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
          newDirection = 'below';
        }
    
    }

    if (newDirection == 'above' ||
        (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
   
  };
  
})(window.jQuery);




// $('.ui.dropdown')
//   .dropdown()
// ;
$('.ui.dropdown').dropdown({ 
  fullTextSearch: true,
  onChange: function() {
      var data_value=$(this).find(".text img").attr("data-value");
      $(".smd-db-report").removeClass("active-rp");
      $(data_value).addClass('active-rp');
  }
});

$(".smd-select-search").select2({
    placeholder: "Select a programming language",
    allowClear: true
});
// $(".select2").select2({
//     placeholder: "Select a programming language",
//     allowClear: true,
//     dropdownParent: $('#add-template-report'),
//     dropdownPosition: 'above'
// });
$(".smd-select-search-popup").select2({
    placeholder: "Select a programming language",
    allowClear: true
})

function resizableGrid(tables_resize_storage) {
  $(tables_resize_storage).find("thead th").each(function (index, value) {
     var sizerID = "#" + $(this).attr("id");
     localStorage.setItem(sizerID,$(this).width());
  });
}
 $(document).ready(function () {
  $("#tableId-1 th").resizable({
    minWidth: 25,
    handles: 'e',
    resize: function (event, ui) {
      resizableGrid("#tableId-1");
    }
  });
});



//***************function click .............
// $(document).ready(function() {
  
// });
function row_info_click(e){
  $(e).next(".info").toggleClass("active");
}
function slide_toggle_item_blk_worklist(e){
  $(e).next("ul").slideToggle();
  $(e).toggleClass("active-control")
}
function slide_toggle_sub_addnew(e){
  $(e).parents(".md-addnew").find("ul").toggleClass("active")
}
function expand_tr_more(e){
  $(e).parents("tr").next("tr").toggleClass('active-tr');
}

function expand_select_permission(e){
  $(e).parents(".group-select-permission").toggleClass("active");
}

$(document).mouseup(function(e) 
{
    var container = $(".md-addnew .has-sub .text");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".md-addnew .has-sub ul").removeClass("active");
    }
});
$(document).mouseup(function(e) 
{
    var container = $(".table-action .icon");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".sub-action").removeClass("active-sub-action");
    }
});
function table_action(e){
  $(e).closest("table").find(".table-action ul").not($(e).closest(".table-action").find("ul")).removeClass("active-sub-action");
  $(e).closest(".table-action").find(".sub-action").toggleClass("active-sub-action");
}



function open_popup_view(e){
  $(e).closest("body").find(".popup-viewer").addClass("active-viewer");
}
function close_popup_view(e){
  $(e).closest("body").find(".popup-viewer").removeClass("active-viewer");
}
function active_tr(e){
  $(e).closest("table").find("tbody tr").removeClass("active");
  $(e).addClass("active");
}
function active_tr_hasclick(e){
  $(e).closest("table").find("tbody tr").removeClass("active");
  $(e).addClass("active");
}
function account_click(e){
  $(e).find(".menu-content").toggleClass("active")
}
$(document).mouseup(function(e) 
{
    var container = $(".account");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".menu-content").removeClass("active")
    }
});
// $(".page-patient .blk-table-admin table tbody tr").click(function(){
// 	$(this).next().toggleClass('active-tr');
// })
// $(".blk-worklist .item .control").click(function(){
// 	$(this).next("ul").slideToggle();
// })
// $(".blk-menu .item .card").click(function(){
//   $(this).next("ul").toggleClass("active-ul");
//   $(this).toggleClass("active-card");
// })
// $(".blk-menu .main-card").click(function(){
//   $(this).next(".list-item").toggleClass("active-item")
//   $(this).toggleClass("active-main-card");
// })
// $("table.has-click tbody tr").click(function(){
//   $(this).closest("table").find("tbody tr").removeClass("active");
//   $(this).addClass("active");
// })
function set_height_blk_worklist(){
  if ($(window).height()>600) {
      var window_height=$(window).height()
     -$(".page-header").outerHeight()
     
      $(".blk-worklist").css("min-height",window_height); 
   }else{
     var window_height=$(document).height()
     -$(".page-header").outerHeight()
    
      $(".blk-worklist").css("min-height",window_height); 
   }
  
}

function set_height_blk_table(){
	if ($(".page-main").find(".md-pagination").length > 0) {
    if ($(window).height()>600) {
      var window_height=$(window).height()-$(".page-header").outerHeight()-$(".blk-table-admin .meta-top").outerHeight()-$(".blk-pagination").outerHeight() -25;
      $(".blk-table-admin .blk-table").css("height",window_height);
    }else{
      var window_height=$(document).height()-$(".page-header").outerHeight()-$(".blk-table-admin .meta-top").outerHeight()-$(".blk-pagination").outerHeight() -25;
      $(".blk-table-admin .blk-table").css("height",window_height);
    }
	}
  else if ($(".page-main").find(".blk-info").length > 0) {
    if ($(window).height()>600) {
      var window_height=$(window).height()-$(".page-header").outerHeight()-$(".blk-table-admin .meta-top").outerHeight()
      -$(".blk-info").outerHeight() - 35;
      $(".blk-table-admin .blk-table").css("height",window_height);
    }else{
      var window_height=$(document).height()-$(".page-header").outerHeight()-$(".blk-table-admin .meta-top").outerHeight()
        -$(".blk-info").outerHeight() - 35;
      $(".blk-table-admin .blk-table").css("height",window_height);
    }
  }
  else{
    if ($(window).height()>600) {
      var window_height=$(window).height()-$(".page-header").outerHeight()-$(".blk-table-admin .meta-top").outerHeight()-$(".blk-table-admin .top-content").outerHeight() - 40;
      $(".blk-table-admin .blk-table").css("height",window_height); 
    }else{
      var window_height=$(document).height()-$(".page-header").outerHeight()-$(".blk-table-admin .meta-top").outerHeight()-$(".blk-table-admin .top-content").outerHeight() - 40;
      $(".blk-table-admin .blk-table").css("height",window_height); 
    }
		
	}
	
}


function set_height_tab_thong_tin(){
  if ($(".group-button").length > 0) {
    $( ".ca-chup-khac .tab-content .tab-pane" ).each(function() {
      var get_height=$(".blk-info").outerHeight()-$(this).find(".group-button").outerHeight()-30 ;
      $(this).find(".top-content").css("height",get_height);
      // alert( get_height);
    });
    
    
  }
  
}
set_height_tab_thong_tin();
function set_height_tab_reporting(){
  if ($(".page-reporting").length > 0) {
    var get_height_1=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight()
    $(".blk-info .top-blk-rpt").css("height",get_height_1);  


     

    var get_height=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight()
    -$(".top-blk-rpt .group-button").outerHeight()
    -$(".top-blk-rpt .gglc-group").outerHeight()
    -35 ;
    $(".blk-info .top-content-rpt").css("height",get_height);
    var get_height_hl_1=$(".popup-rh308 .modal-body").outerHeight()-$(".popup-rh308 .bottom-content-reporting").outerHeight()
     // -$(".popup-rh308 .header-pop-up").outerHeight();
     // alert(get_height_hl_1);
    $(".popup-rh308 .top-blk-rpt").css("height",get_height_hl_1); 
    // alert( get_height);
    var get_height_hl_22=$(".popup-rh308 .top-blk-rpt").outerHeight()-
    -$(".popup-rh308  .group-button").outerHeight()
    -$(".popup-rh308  .gglc-group").outerHeight()
    -100 ;
    // alert(get_height_hl_2);
    $(".popup-rh308 .top-content-rpt").css("height",get_height_hl_22);
    $(".popup-rh308 .quill-reporting-1 .ql-editor").css("height",get_height_hl_22-204);
  }
  
}
set_height_tab_reporting();

// $(".bottom-content-reporting").click(function(){
//   $(this).addClass("z-index-rpt");
// })
// $(document).mouseup(function(e) 
// {
//     var container = $(".bottom-content-reporting");

//     if (!container.is(e.target) && container.has(e.target).length === 0) 
//     {
//         container.removeClass("z-index-rpt");
//     }
// });

function set_height_right_studio(){
   // if ($(window).height()>600) {

   // }else{
     var window_height=$(window).height()
     -$(".page-header").outerHeight()
     -$(".right-study .top-content").outerHeight() 
     -$(".right-study .bottom-content").outerHeight()
     -$(".right-study .blk-report .top-tab").outerHeight() -35;
      $(".right-study .main-content .fl-left").css("height",window_height); 
   // }
}
function set_height_editor_gr(){
  $(".blk-report .tab-content .tab-pane").each(function() {
      // $(this).find(".bottom-content").addClass("aaaa");
      
         var window_height=$(window).height()
        -$(".page-header").outerHeight()
        -$(".right-study .top-content").outerHeight() 
        // -$(".right-study .bottom-content").outerHeight()
        -$(this).find(".bottom-content").outerHeight()
        -$(".right-study .main-content .fl-left form .meta-bottom").outerHeight()
        -$(".right-study .blk-report .top-tab").outerHeight() -40;
        $(this).find(".editor-gr").css("height",window_height); 
         // $(".right-study .main-content .fl-left .editor-gr").css("height",window_height); 
      
    });
  $(document).ready(function() {
    $(".blk-report .tab-content .tab-pane").each(function() {
      // $(this).find(".bottom-content").addClass("aaaa");
      
         var window_height=$(window).height()
        -$(".page-header").outerHeight()
        -$(".right-study .top-content").outerHeight() 
        // -$(".right-study .bottom-content").outerHeight()
        -$(this).find(".bottom-content").outerHeight()
        -$(".right-study .main-content .fl-left form .meta-bottom").outerHeight()
        -$(".right-study .blk-report .top-tab").outerHeight() -40;
        $(this).find(".editor-gr").css("height",window_height); 
         // $(".right-study .main-content .fl-left .editor-gr").css("height",window_height); 
      
    });
  });
   
}
function set_height_gallery_firm(){
  $(".blk-report .tab-content .tab-pane").each(function() {
      // $(this).find(".bottom-content").addClass("aaaa");
        
          var window_height=$(window).height()
        -$(".page-header").outerHeight()
        -$(".right-study .top-content").outerHeight() 
        -$(this).find(".bottom-content").outerHeight()
        -$(".right-study .main-content .fl-right .ss-title").outerHeight()
        -$(".right-study .blk-report .top-tab").outerHeight() -47;
         $(this).find(".gallery-firm").css("height",window_height); 


    });
  $(document).ready(function() {
    $(".blk-report .tab-content .tab-pane").each(function() {
      // $(this).find(".bottom-content").addClass("aaaa");
        
          var window_height=$(window).height()
        -$(".page-header").outerHeight()
        -$(".right-study .top-content").outerHeight() 
        -$(this).find(".bottom-content").outerHeight()
        -$(".right-study .main-content .fl-right .ss-title").outerHeight()
        -$(".right-study .blk-report .top-tab").outerHeight() -47;
         $(this).find(".gallery-firm").css("height",window_height); 


    });
  });

  // $(document).ready(function() {
  //  if ($(window).height()>600) {
  //      var window_height=$(window).height()
  //    -$(".page-header").outerHeight()
  //    -$(".right-study .top-content").outerHeight() 
  //    -$(".right-study .bottom-content").outerHeight()
  //    -$(".right-study .main-content .fl-right .ss-title").outerHeight()
  //    -$(".right-study .blk-report .top-tab").outerHeight() -47;
  //     $(".gallery-firm").css("height",window_height); 
  //  }else{
  //    var window_height=$(document).height()
  //    -$(".page-header").outerHeight()
  //    -$(".right-study .top-content").outerHeight() 
  //    -$(".right-study .bottom-content").outerHeight()
  //    -$(".right-study .main-content .fl-right .ss-title").outerHeight()
  //    -$(".right-study .blk-report .top-tab").outerHeight() -47;
  //     $(".gallery-firm").css("height",window_height); 
  //  }
  // }); 
}

function set_height_panel_study(){
   if ($(window).height()>600){
       var window_height=$(window).height()
     -$(".page-header").outerHeight()
     -$(".left-study .tab-group").outerHeight()-1
     $(".panel-study").css("height",window_height); 
   }else{
     var window_height=$(document).height()
     -$(".page-header").outerHeight()
     -$(".left-study .tab-group").outerHeight()-1
     $(".panel-study").css("height",window_height); 
   }
}
//#scroll-ca-chup
function set_height_scroll_ca_chup(){
  var window_height=$(".panel-top-study").height()
  -$(".left-study .blk-checkbox-outer").outerHeight()-10;
  $("#scroll-ca-chup").css("height",window_height);
}
set_height_panel_study();
// function set_height_scroll_panel_left_study(){

//    if ($(window).height()>600) {
//        var window_height=$(window).height()
//      -$(".page-header").outerHeight()
//      $("#scroll-panel-left-study").css("height",window_height); 
//      // .left-study .tab-content 
//    }else{
//      var window_height=$(document).height()
//      -$(".page-header").outerHeight();
//      $("#scroll-panel-left-study").css("height",window_height); 
//    }
// }
// set_height_scroll_panel_left_study();


function set_height_split(){
  
  if ($(window).height()>600) {
    var window_height=$(window).height()
    -$(".page-header").outerHeight()
    $(".splitter").css("height",window_height);
  }else{
    var window_height=$(document).height()
    -$(".page-header").outerHeight()
    $(".splitter").css("height",window_height);
  } 
}
function set_height_blk_info(){
  if ($(window).height()>600) {
    var window_height=$(window).height()
    -$(".page-header").outerHeight()
    -$(".page-work-list .blk-table-admin .panel-top").outerHeight()
    -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -30
    $(".page-work-list .panel-bottom").css("height",window_height);
  }else{
    var window_height=$(document).height()
    -$(".page-header").outerHeight()
    -$(".page-work-list .blk-table-admin .panel-top").outerHeight()
    -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -30  
    $(".page-work-list .panel-bottom").css("height",window_height);
  }
    
}
function set_blk_panel_top_study(){
    if ($(window).height()>600) {
      var window_height=$(window).height()
      -$(".page-header").outerHeight()
      -$(".tab-group").outerHeight() -150
      // -$(".left-study .ca-chup").outerHeight()
      $(".left-study .panel-top-study").css("height",window_height); 
      // alert($(".ca-chup").outerHeight());
    }else{
      var window_height=$(document).height()
      -$(".page-header").outerHeight()
      -$(".page-header").outerHeight()
      -$(".left-study .tab-group").outerHeight() -150
      // -$(".left-study .ca-chup").outerHeight()
      $(".left-study .panel-top-study").css("height",window_height); 
    }
}
function set_height_left_study(){

   if ($(window).height()>600) {
       var window_height=$(window).height()
     -$(".page-header").outerHeight()
    
     $(".left-study").css("height",window_height); 
     // .left-study .tab-content 
   }else{
     var window_height=$(document).height()
     -$(".page-header").outerHeight()
     $(".left-study").css("height",window_height); 
   }
}


function set_blk_spitter_ml3(){
  if ($(window).height()>600) {
    var window_height=$(window).height()
    -$(".page-header").outerHeight()
    -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -17
    $(".spitter-ml3").css("height",window_height);
    $(".table-telephone .tele-table").css("height",window_height,"important");
  }else{
    var window_height=$(document).height()
    -$(".page-header").outerHeight()
    -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -17
    $(".spitter-ml3").css("height",window_height);
    $(".table-telephone .tele-table").css("height",window_height,"important");
  }

}
function set_height_panel_top(){
  if ($(window).height()>600) {
    var window_height=$(window).height()
    -$(".page-header").outerHeight()
    -$(".page-work-list .blk-table-admin .meta-top").outerHeight()-120
    $(".spitter-ml3 .panel-top").css("height",window_height);
  }else{
     var window_height=$(document).height()
    -$(".page-header").outerHeight()
    -$(".page-work-list .blk-table-admin .meta-top").outerHeight()-120
    $(".spitter-ml3 .panel-top").css("height",window_height);
  }
}


$("#btn-collapse").click(function(){
  if($(this).hasClass("active")){
     var height_table_ca_chup_khac =$(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").height();
     localStorage.setItem('height_table_ca_chup_khac', height_table_ca_chup_khac);
     var  height_panel_bottom =$(".page-work-list .panel-bottom").height();
    localStorage.setItem('height_panel_bottom ', height_panel_bottom);
    var height_top_content_rpt =$(".blk-info .top-content-rpt").height();
    localStorage.setItem('height_top_content_rpt',height_top_content_rpt);
    var height_top_blk_rpt =$(".blk-info .top-blk-rpt").height();
    // alert(height_top_blk_rpt);
    localStorage.setItem('height_top_blk_rpt',height_top_blk_rpt);
    var height_panel_top=$(".spitter-ml3 .panel-top").height();
    localStorage.setItem('height_panel_top',height_panel_top);
    // alert(height_top_content_rpt);
    $(this).removeClass("active");

    $(".spitter-ml3 .panel-top").css("height",0);
    var get_height_1=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight()
      $(".blk-info .top-blk-rpt").css("height",get_height_1);  
      set_height_table_ca_chup_khac();
      set_height_tab_reporting();

     $(".blk-info .quill-reporting-1 .ql-editor").css("height",get_height_1-320);


     // if ($(window).height()>600){
     //   var height_table_ca_chup_khac_1=$(window).height()
     //   -$(".page-header").outerHeight()
     //   -$(".page-work-list  .blk-ca-chup-khac .title-cck").outerHeight()-20
     //   // .left-study .tab-content 
     //   localStorage.setItem('height_table_ca_chup_khac_1', height_table_ca_chup_khac_1);
     // }else{
     //    var height_table_ca_chup_khac_2=$(document).height()
     //   -$(".page-header").outerHeight()
     //   -$(".page-work-list  .blk-ca-chup-khac .title-cck").outerHeight()-20
     //   localStorage.setItem('height_table_ca_chup_khac_2', height_table_ca_chup_khac_2);
     // }  
     
     // if ($(window).height()>600) {
     //   var height_panel_bottom_1=$(window).height()
     //   -$(".page-header").outerHeight()
     //   -$(".page-work-list .blk-table-admin .panel-top").outerHeight()
     //   -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -30
     //   localStorage.setItem('height_panel_bottom', height_panel_bottom_1);
     // }else{
     //   var height_panel_bottom_2=$(document).height()
     //   -$(".page-header").outerHeight()
     //   -$(".page-work-list .blk-table-admin .panel-top").outerHeight()
     //   -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -30 
     //   localStorage.setItem('height_panel_bottom', height_panel_bottom_2);
     // }
     // var height_top_blk_rpt=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight(); 
     // localStorage.setItem('height_top_blk_rpt',height_top_blk_rpt);

     // var height_top_content_rpt=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight()
     // -$(".top-blk-rpt .group-button").outerHeight()
     // -$(".top-blk-rpt .gglc-group").outerHeight()
     // -35 ;
     // var height_top_blk_rpt=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight();
     // localStorage.setItem('height_top_blk_rpt', height_top_blk_rpt);

     

  }else{
    $(this).addClass("active");
    // var window_height=$(window).height()
    // -$(".page-header").outerHeight()
    // -$(".page-work-list .blk-table-admin .meta-top").outerHeight()-320
    $(".spitter-ml3 .panel-top").css("height",localStorage.getItem("height_panel_top"));
    $(".blk-info .quill-reporting-1 .ql-editor").css("height","20rem");


    $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",localStorage.getItem("height_table_ca_chup_khac"));

    $(".blk-info .top-blk-rpt").css("height",localStorage.getItem("height_top_blk_rpt")); 
    // alert(localStorage.getItem("height_top_blk_rpt"));
    // $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",localStorage.getItem("height_table_ca_chup_khac"));
    $(".page-work-list .panel-bottom").css("height",localStorage.getItem("height_panel_bottom")); 
    // if ($(window).height()>600){
    //   $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",localStorage.getItem("height_table_ca_chup_khac"));
    //   $(".page-work-list .panel-bottom").css("height",localStorage.getItem("height_panel_bottom_1"));  
    // }else{
    //   $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",localStorage.getItem("height_table_ca_chup_khac_2"));
    //   $(".page-work-list .panel-bottom").css("height",localStorage.getItem("height_panel_bottom_2"));    
    // }

    $(".blk-info .top-content-rpt").css("height",localStorage.getItem("height_top_content_rpt"));  
    $(".blk-info .top-blk-rpt").css("height",localStorage.getItem("height_top_blk_rpt"));

  }


  // var get_height_1=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight()
  //   $(".blk-info .top-blk-rpt").css("height",get_height_1);  

  // if ($(window).height()>600){
  //   var window_height=$(window).height()
  //   -$(".page-header").outerHeight()
  //   -$(".page-work-list  .blk-ca-chup-khac .title-cck").outerHeight()-20
  //   $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",window_height); 
  //   // .left-study .tab-content 
  // }else{
  //    var window_height=$(document).height()
  //   -$(".page-header").outerHeight()

  //   -$(".page-work-list  .blk-ca-chup-khac .title-cck").outerHeight()-20
  //   $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",window_height);  
  // }  

  // if ($(window).height()>600) {
  //   var window_height=$(window).height()
  //   -$(".page-header").outerHeight()
  //   -$(".page-work-list .blk-table-admin .panel-top").outerHeight()
  //   -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -30
  //   $(".page-work-list .panel-bottom").css("height",window_height);
  // }else{
  //   var window_height=$(document).height()
  //   -$(".page-header").outerHeight()
  //   -$(".page-work-list .blk-table-admin .panel-top").outerHeight()
  //   -$(".page-work-list .blk-table-admin .meta-top").outerHeight() -30  
  //   $(".page-work-list .panel-bottom").css("height",window_height);
  // }

  // var get_height=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight()
  // -$(".top-blk-rpt .group-button").outerHeight()
  // -$(".top-blk-rpt .gglc-group").outerHeight()
  // -35 ;
  // $(".blk-info .top-content-rpt").css("height",get_height);
  // var get_height_1=$(".blk-info").outerHeight()-$(".bottom-content-reporting").outerHeight()
  //   $(".blk-info .top-blk-rpt").css("height",get_height_1);  

   // $(".quill-reporting-1 .ql-editor").css("height",get_height_1-320);
})
function set_height_table_ca_chup_khac(){
    if ($(window).height()>600){
      var window_height=$(window).height()
      -$(".page-header").outerHeight()
      -$(".page-work-list  .blk-ca-chup-khac .title-cck").outerHeight()-20
      $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",window_height); 
      // .left-study .tab-content 
    }else{
       var window_height=$(document).height()
      -$(".page-header").outerHeight()

      -$(".page-work-list  .blk-ca-chup-khac .title-cck").outerHeight()-20
      $(".page-work-list  .blk-ca-chup-khac .table-ca-chup-khac").css("height",window_height);  
    }
}
function set_height_page_patient_hl(){
    if ($(window).height()>600){
      var window_height=$(window).height()
      -$(".page-header").outerHeight()
      $(".page-patient-hl").css("height",window_height)-23; 
    }else{
       var window_height=$(document).height()
      -$(".page-header").outerHeight()-23
      $(".page-patient-hl").css("height",window_height); 
    }
}
function set_height_describer_content(){
    if ($(window).height()>600){
      var window_height_1=$(".page-patient-hl").outerHeight()
      -$(".img-top").outerHeight()
      -$(".info-user").outerHeight()
      -$(".patient-contact").outerHeight()+45;
      $(".describer-content .scroll-patient").css("height",window_height_1);
    }else{
        var window_height_1=$(".page-patient-hl").outerHeight()
      -$(".img-top").outerHeight()
      -$(".info-user").outerHeight()
      -$(".patient-contact").outerHeight()+45;
      $(".describer-content .scroll-patient").css("height",window_height_1);
    }
}
function set_height_describer_images(){
    if ($(window).height()>600){
      var window_height_1=$(window).height()
      -$(".page-header").outerHeight()
      -$(".img-top").outerHeight()
      -$(".info-user").outerHeight()
      -$(".patient-contact").outerHeight()+50;
      $(".describer .describer-images").css("height",window_height_1);
    }else{
      var window_height_1=$(document).outerHeight()
      -$(".page-header").outerHeight()
      -$(".img-top").outerHeight()
      -$(".info-user").outerHeight()
      -$(".patient-contact").outerHeight()+50;
      $(".describer .describer-images").css("height",window_height_1);
    }
}
function set_height_scroll_list_of_results(){
    if ($(window).height()>600){
      var window_height_1=$(window).height()
      -$(".page-header").outerHeight()
      -$(".page-header").outerHeight()
      $(".scroll-list-of-results").css("height",window_height)-23; 
    }else{
       var window_height=$(document).height()
      -$(".page-header").outerHeight()-23
      $(".scroll-list-of-results").css("height",window_height); 
    }
}
set_height_table_ca_chup_khac();
set_height_panel_top();
set_blk_spitter_ml3();

set_height_blk_info();
set_height_split();

//  
set_height_editor_gr();
set_height_gallery_firm();
set_height_table_ca_chup_khac();
// set_height_page_patient_hl();
set_height_describer_content();
set_height_describer_images();
set_height_scroll_list_of_results()
set_blk_panel_top_study();
set_height_scroll_ca_chup();
set_height_blk_worklist();
set_height_left_study();
$(document).ready(function () {
  menu_rpt_tb();
  set_height_tab_thong_tin();
  set_height_tab_reporting();
  set_height_left_study();
  set_height_blk_table();
  set_height_editor_gr();
  set_height_split();
  
  set_height_blk_info();
  set_height_table_ca_chup_khac();
  set_height_page_patient_hl();
  set_height_describer_content();
  set_height_describer_images();
  set_height_scroll_list_of_results()
  set_blk_panel_top_study();
  set_height_scroll_ca_chup()
  set_height_blk_worklist();
  set_max_height_modal_print_n();
});

 window.onresize = function() {

   set_height_blk_table();
   set_height_tab_thong_tin();
   set_height_tab_reporting();
   set_height_gallery_firm();
   set_height_editor_gr();
   set_height_split();
   // set_blk_panel_top_study();
  set_height_blk_info();
  set_height_table_ca_chup_khac();
  set_blk_spitter_ml3();
  set_height_page_patient_hl();
  set_height_describer_content();
  set_height_describer_images();
  set_height_scroll_list_of_results()
  set_height_blk_worklist();
  set_height_left_study();
}
window.addEventListener("resize", function(event) {
  set_height_panel_container_2();
  set_height_panel_container_1();
   set_height_blk_table();
   set_height_tab_thong_tin();
   set_height_tab_reporting()
   set_height_gallery_firm();
   set_height_editor_gr();
   set_height_left_study();
   set_height_split();
   // set_blk_panel_top_study();
  set_height_blk_info();
  set_height_table_ca_chup_khac()
  set_blk_spitter_ml3();
  set_height_page_patient_hl();
  set_height_describer_content();
  set_height_describer_images();
  set_height_scroll_list_of_results()
  set_height_blk_worklist();
})

 $(".panel-left").resizable({
   handleSelector: ".splitter",
   resizeHeight: false,
   resize: function(event, ui){
      set_height_panel_study();
      // set_blk_panel_top_study();
      set_height_scroll_ca_chup();
    }
 });
 $(".panel-print-left").resizable({
  
   resizeHeight: false,
   resize: function(event, ui){
      set_height_panel_study();
      // set_blk_panel_top_study();
      set_height_scroll_ca_chup()
    }
 });
 $(".panel-top").resizable({
   handleSelector: ".splitter-horizontal",
   resizeWidth: false,
    resize: function(event, ui){
      set_height_blk_info();
      // set_blk_panel_top_study();
      set_height_tab_thong_tin();
      set_blk_spitter_ml3();
      set_height_table_ca_chup_khac();
      set_height_tab_reporting();
      if($("#tableId-1").hasClass("table-has-menu-rpt-tb")){
        $('#id-demo-1').overlayScrollbars({
            callbacks: {
              onScroll : function(e) { 
                var scrollInfo = this.scroll();
                console.log(scrollInfo);
                $(".menu-rpt-tb").css("right",(scrollInfo.max.x-scrollInfo.position.x));
                if(scrollInfo.ratio.y === 1) {
                  console.log('đây là end scroll');
                }
              }
            }
          }); 
      }

    }
 });
 // $(".left-tch").resizable({
 //   handleSelector: ".splitter-vertical",
 //   resizeWidth: false,
 //    resize: function(event, ui){
 //      // set_height_blk_info();
 //      // // set_blk_panel_top_study();
 //      // set_blk_spitter_ml3();
 //      // set_height_table_ca_chup_khac();

 //    }
 // });
 $(".panel-top-study").resizable({
   handleSelector: ".splitter-horizontal",
   resizeWidth: false,
    resize: function(event, ui){
      set_height_scroll_ca_chup();
      // set_blk_panel_top_study();
    }
 });


 function set_height_panel_container_2(){
  var height=$(".editor-gr").outerHeight()-$(".panel-container-1").outerHeight();
  $(".panel-container-2").css("height",height);
 }
 function set_height_panel_container_1(){
  var height=$(".editor-gr").outerHeight()-$(".panel-container-2").outerHeight();
  $(".panel-container-1").css("height",height);
 }
 set_height_panel_container_2();
 set_height_panel_container_1();
 $(".panel-container-1").resizable({
   handleSelector: ".splitter-horizontal",
   resizeWidth: false,
    resize: function(event, ui){
     set_height_panel_container_2();
    }
 });
//keydown nav-tabs............/work-list.html
$(".blk-ca-chup-khac .nav-tabs li").click(function(){
  $(".blk-ca-chup-khac .nav-tabs li").removeClass("on_focus")
  $(this).addClass("on_focus");
})

$(document).mouseup(function(e){
  var container = $(".blk-ca-chup-khac .table-ca-chup-khac");
  if (!container.is(e.target) && container.has(e.target).length === 0) 
  {
    container.find(".on_focus").removeClass("on_focus");
  }
});
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    if($(".blk-ca-chup-khac .nav-tabs li").hasClass("on_focus")){
      $(".blk-ca-chup-khac .nav-tabs .on_focus").prev().find(".nav-link").addClass('active').parents("li").addClass("on_focus").next().removeClass("on_focus").find(".nav-link").removeClass('active');
      
    }
  } else if (e.keyCode == '40') {
      if($(".blk-ca-chup-khac .nav-tabs li").hasClass("on_focus")){
      $(".blk-ca-chup-khac .nav-tabs .on_focus").next().find(".nav-link").addClass('active').parents("li").addClass("on_focus").prev().removeClass("on_focus").find(".nav-link").removeClass('active');
      
    }
      
  }
}
//end keydown nav-tabs............/work-list.htmlscroll

function menu_rpt_tb(){
  $(".menu-rpt-tb").css("right",$(".table-has-menu-rpt-tb").width()-$('#id-demo-1').width());
}
menu_rpt_tb();
 

OverlayScrollbars(document.querySelectorAll(".md-scroll-xy"), { });
 $('.md-scroll-xy').overlayScrollbars({
      resize          : "both",
      sizeAutoCapable : true,
      paddingAbsolute : true
    }); 
  $('#id-demo-1').overlayScrollbars({
      resize          : "both",
      sizeAutoCapable : true,
      paddingAbsolute : true,
      callbacks: {
        onScroll : function(e) { 
          var scrollInfo = this.scroll();
          console.log(scrollInfo);
          $(".menu-rpt-tb").css("right",(scrollInfo.max.x-scrollInfo.position.x));
          if(scrollInfo.ratio.y === 1) {
            console.log('đây là end scroll');
          }
        }
      }
    }); 
  $('.table-more').overlayScrollbars({
      resize          : "both",
      sizeAutoCapable : true,
      paddingAbsolute : true});
 $('.md-scroll-y').overlayScrollbars({
      resize          : "both",
      sizeAutoCapable : true,
      paddingAbsolute : true});
  $('.table-more').overlayScrollbars({
      resize          : "both",
      sizeAutoCapable : true,
      paddingAbsolute : true});
  $("#scroll-thong-tin-ca-benh").overlayScrollbars({
      resize          : "both",
      sizeAutoCapable : true,
      paddingAbsolute : true});
 


$(window).on("load",function(){
    $(".menu").mCustomScrollbar();
    $(".lga-scroll").mCustomScrollbar({
      axis:"x",
      scrollInertia: 0,
      mouseWheel:{ enable:false}
    });
    // setTimeout(function() {
    //     $(".select2-results__options").mCustomScrollbar();
    // }, 3000)
    
});

$(".mCustomScrollbar-xy").mCustomScrollbar();
$(".mCustomScrollbar-x").mCustomScrollbar({
  axis:"x"
});
$(".mCustomScrollbar-y").mCustomScrollbar({
  axis:"y"
});


$(".toggle-icon .icon-menu").click(function(){
  // alert('a');
  $(this).parents(".toggle-icon").toggleClass("active-menu");
  $(".sub-menu").toggleClass("sub-menu-active")
})

function active_md_addnew(){
  $(".blk-table-admin .blk-control .nav .nav-item").click(function(){
    var data_adnew=$(this).find("a").attr("data-adnew");

    $(".md-addnew a").removeClass("show-add-new");
    $(data_adnew).addClass("show-add-new");
  })
}
active_md_addnew();



function set_max_height_modal_print_report_left_content(){
  var window_height=$(".modal-print-report .modal-content").height()-$(".modal-print-report .modal-title").outerHeight()-40
  $(".print-report .left-content").css("max-height",window_height);
   $("#report-content").css("max-height",window_height);
}
set_max_height_modal_print_report_left_content();
function set_max_height_modal_command_list_print(){
  var window_height=$(".modal-command-list-print .modal-content").height()-$(".modal-command-list-print .modal-title").outerHeight()-40
  $(".modal-command-list-print .table-scroll-xy").css("max-height",window_height);
   
}
set_max_height_modal_command_list_print();

function set_max_height_modal_print_n(){
  var window_height=$("#modal-print-n .modal-content").height()-$(".modal-command-list-print .modal-title").outerHeight()-40
  $("#modal-print-n .table-scroll-xy").css("max-height",window_height);
   
}
set_max_height_modal_print_n();
set_max_height_modal_command_list_print();
function set_max_height_modal_print_report_left_content_1(){
  var window_height=$("#popup-tcd .modal-content").height()-$("#popup-tcd .modal-title").outerHeight()-50
   $("#popup-tcd .panel-tcd").css("height",window_height);
}
set_max_height_modal_print_report_left_content_1();
$(function() {
    // $( ".modal-content" ).resizable();
    $( ".has-resize .modal-content" ).resizable({ 
      handles: 'n, e, s, w,ne, se, sw, nw, all' ,
      resize: function (event, ui) {
        set_max_height_modal_print_report_left_content();
        set_max_height_modal_print_report_left_content_1();
        set_max_height_modal_command_list_print();
        set_max_height_modal_print_n();
      }
  });
});

$(".has-draggable").draggable({
      handle: ".header-pop-up"
  });
// function position_popup_bootstrap(){
  $( ".popup-bootstrap" ).each(function( index ) {
    var center=($(window).width()- $(this).find(".modal-content").width())/2;
    $(this).find(".modal-content").css("left",center);
    var center_top=($(window).height()- $(this).find(".modal-content").height())/2;
    $(this).find(".modal-content").css("top",center_top);
  });
// }
// position_popup_bootstrap()
window.onresize = function() {
   $( ".popup-bootstrap" ).each(function( index ) {
    var center=($(window).width()- $(this).find(".modal-content").width())/2;
    $(this).find(".modal-content").css("left",center);
    var center_top=($(window).height()- $(this).find(".modal-content").height())/2;
    $(this).find(".modal-content").css("top",center_top);
  });
}

function menu_dropdown(){
  $()
  $( ".smd_dropdown_menu .hl-content" ).click(function(){
    $(this).siblings(".s-menu-1").addClass("active-s-menu-1").stop();

    var photo = $(this).siblings('.s-menu-1');
    var offset = photo.offset()

    var viewportOffsetTop = offset.top - $(document).scrollTop()

    var viewportOffsetBottom = $(window).height()-$(photo).height()-viewportOffsetTop;

    if(viewportOffsetBottom<0){
      $(".s-menu-1").css("top",viewportOffsetBottom + $(".span-menu").height());
    }
  })
  $(document).mouseup(function(e) 
  {
      var container = $(".s-menu-1");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
        $(".s-menu-1").removeClass("active-s-menu-1");
        $(".s-menu-1").removeAttr("style");
      }
  });

  $( ".has-sub-2" ).hover(
    function() {
      $(this).children(".s-menu-2").addClass("active-s-sub-2");
      var top = $(this).offset().top;
      var left = $(this).offset().left + 186;
      $(this).children(".s-menu-2").css("top",top);
      $(this).children(".s-menu-2").css("left",left);
       var photo2 = $(this).children(".s-menu-2");
       var offset2 = photo2.offset();
       var viewportOffsetTop2 = offset2.top - $(document).scrollTop();
       var viewportOffsetBottom2 = $(window).height()-$(photo2).height()-viewportOffsetTop2;
       var sos =$(window).height()-$(this).children(".s-menu-2").height();
       if(viewportOffsetBottom2<0){
         $(this).children(".s-menu-2").css("top",sos);

       }
       
    }, function() {
      $(this).children(".s-menu-2").removeClass("active-s-sub-2");
      $(this).children(".s-menu-2").removeAttr("style");
    }
  );
  $( ".has-sub-3" ).hover(
    function() {
      $(this).children(".s-menu-3").addClass("active-s-sub-3");
       var photo3 = $(this).children(".s-menu-3");
       var offset3 = photo3.offset();
       var viewportOffsetTop3 = offset3.top - $(document).scrollTop();
       var viewportOffsetBottom3 = $(window).height()-$(photo3).height()-viewportOffsetTop3;
       // photoViewportOffsetLeft3 = offset3.left - $(document).scrollLeft();
       // alert(viewportOffsetBottom2);
       if(viewportOffsetBottom3<0){
         $(this).children(".s-menu-3").css("top",viewportOffsetBottom3);
       }

    }, function() {
      $(this).children(".s-menu-3").removeClass("active-s-sub-3");
      $(this).children(".s-menu-3").removeAttr("style");
    }
  );
  $(".smd_dropdown_menu ul li span.text").click(function(){
    var cccc= $(this).text();
    $(this).closest(".span-menu").children(".hl-content").text(cccc);
    $(".s-menu-1").removeClass("active-s-menu-1");
  });
  // if($("#modal-edit-report .s-menu-1").hasClass('active-s-menu-1')){
  //   $("#modal-edit-report .smd_dropdown_menu .hl-content").click(function(){
  //     $("#modal-edit-report .s-menu-1").removeClass("active-s-menu-1");
  //   })
  // }

  // $("#modal-edit-report .smd_dropdown_menu li span").click(function(){
  //   var cccc= $(this).text();
  //   $(this).closest(".span-menu").children(".hl-content").text(cccc);
  //   $(".s-menu-1").removeClass("active-s-menu-1");
  // })
}

menu_dropdown();




$(function() {
    var $gallery = $("#gallery"),
        $trash = $("#trash"),
        $items = $("#items");
    // let the gallery items be draggable

    $("li", $gallery).draggable({
      cancel: "a.ui-icon",
      revert: "invalid", 
      containment: "document",
      helper: "clone",
      cursor: "move"
    });

    $trash.droppable({
      accept: "#gallery > li",
      activeClass: "ui-state-highlight",
      drop: function(event, ui) {
        deleteImage(ui.draggable);
      }
    });

    $gallery.droppable({
      accept: "#trash li",
      activeClass: "custom-state-active",
      drop: function(event, ui) {
        recycleImage(ui.draggable);
      }
    });

    var recycle_icon = "<a class='ui-icon ui-icon-refresh remove-img'></a>";

    function deleteImage($item) {
      var obj = cloneObject($item);
      var $list = $("ul", $trash).length ?
          $("ul", $trash) :
          $("<ul class='gallery-drag ui-helper-reset'/>").appendTo($trash);
      obj.find("a.ui-icon-trash").remove();
      obj.append(recycle_icon).appendTo($list).fadeIn(function() {
        obj
          .animate({
        })
          .find("img")
          .animate({
          height: "auto"
        });
      });
      $items.text($("li", $list).length);
    }

    function recycleImage($item) {
      
      $item.fadeOut(function() {
        $item.remove();
        $items.text($("li", $("ul", $trash)).length);
      });
    }

    function cloneObject($item) {
      $('.drag-img-gr li').css("width","");
      var obj = $item.clone();
      obj.draggable({
        cancel: "a.ui-icon",
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
      });
      obj.click(function(event) {
        var $item = $(this),
          $target = $(event.target);
        if ($target.is("a.ui-icon-trash")) {
          deleteImage($item);
        } else if ($target.is("a.ui-icon-zoomin")) {
          viewLargerImage($target);
        } else if ($target.is("a.ui-icon-refresh")) {
          recycleImage($item);
        }
        return false;
      });

      return obj;
    }
   
  });

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

// function  working-list.html(chinh sữa content)
$( ".blk-button-edit" ).click(function() {
 if ($( this ).hasClass("save-data")){
    
 }
 else{
  //textarea
    $(this).closest(".tab-pane").find(".ifo-textarea").each(function() {
      var ccc=$(this).find(".text").html().replace(/<p>/g, '').replace(/<\/p>/g, '\n');
       $(this).after('<textarea oninput="auto_grow(this)">'+ ccc + '</textarea>');
     });


     //set-height cho text area 
     $(this).closest(".tab-pane").find("textarea")
    .each(function () {
       this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
       }).on('input', function () {
       this.style.height = 'auto';
       this.style.height = (this.scrollHeight) + 'px';

     });

     $(this).closest(".tab-pane").find( ".ifo-textarea" ).addClass("hide-content"); 


     //select-opttion
     $(this).closest(".tab-pane").find(".mlc-selected").addClass("hide-content");
     $(this).closest(".tab-pane").find(".mlc-select-option").removeClass("hide-content");
 }
 $(this).addClass("save-data").text("lưu dữ liệu");
});
// localStorage.setItem('state', 'active');
// if($(".ico-close-sidebar").hasClass("active")){
//   localStorage.setItem('state', 'active');
// }else{
//   localStorage.setItem('state', 'none');
// }

$(".ico-close-sidebar").click(function(){
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $("#blk-worklist").removeClass("blk-worklist-hidden");
    $("#blk-table-admin").removeClass("blk-table-admin-hl");
    $("#sidebar-worklist").removeClass("active-sidebar-worklist");
    $(".page-header-hlc .logo").removeClass("hide-logo");
    $(".page-header-hlc .fl-right").removeClass("expand");
    $(this).removeClass("active");
    localStorage.setItem('state', 'none');
    // localStorage.setItem('state', 'active');
  }else{
    $("#blk-worklist").addClass("blk-worklist-hidden");
    $("#blk-table-admin").addClass("blk-table-admin-hl");
    $("#sidebar-worklist").addClass("active-sidebar-worklist");
    $(".page-header-hlc .logo").addClass("hide-logo");
    $(this).addClass("active");
    $(".page-header-hlc .fl-right").addClass("expand");
    localStorage.setItem('state', 'active');
  }
  
})

if (localStorage.getItem('state') != 'none'){
    $("#blk-worklist").addClass("blk-worklist-hidden");
    $("#blk-table-admin").addClass("blk-table-admin-hl");
    $("#sidebar-worklist").addClass("active-sidebar-worklist");
    $(".page-header-hlc .logo").addClass("hide-logo");
    $(".ico-close-sidebar").addClass("active");
    $(".page-header-hlc .fl-right").addClass("expand");
} 


(function () {

    var scrollContainer = document.querySelector('.scrollable'),
        scrollContentWrapper = document.querySelector('.scrollable .content-wrapper'),
        scrollContent = document.querySelector('.scrollable .content'),
        contentPosition = 0,
        scrollerBeingDragged = false,
        scroller,
        topPosition,
        scrollerHeight;

    function calculateScrollerHeight() {
        // *Calculation of how tall scroller should be
        var visibleRatio = scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight;
        return visibleRatio * scrollContainer.offsetHeight;
    }

    function moveScroller(evt) {
        // Move Scroll bar to top offset
        var scrollPercentage = evt.target.scrollTop / scrollContentWrapper.scrollHeight;
        topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5); // 5px arbitrary offset so scroll bar doesn't move too far beyond content wrapper bounding box
        scroller.style.top = topPosition + 'px';
    }

    function startDrag(evt) {
        normalizedPosition = evt.pageY;
        contentPosition = scrollContentWrapper.scrollTop;
        scrollerBeingDragged = true;
    }

    function stopDrag(evt) {
        scrollerBeingDragged = false;
    }

    function scrollBarScroll(evt) {
        if (scrollerBeingDragged === true) {
            var mouseDifferential = evt.pageY - normalizedPosition;
            var scrollEquivalent = mouseDifferential * (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight);
            scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent;
        }
    }

    function createScroller() {
        // *Creates scroller element and appends to '.scrollable' div
        // create scroller element
        scroller = document.createElement("div");
        scroller.className = 'scroller';

        // determine how big scroller should be based on content
        scrollerHeight = calculateScrollerHeight();
        
        if (scrollerHeight / scrollContainer.offsetHeight < 1){
            // *If there is a need to have scroll bar based on content size
            scroller.style.height = scrollerHeight + 'px';

            // append scroller to scrollContainer div
            scrollContainer.appendChild(scroller);
            
            // show scroll path divot
            scrollContainer.className += ' showScroll';
            
            // attach related draggable listeners
            scroller.addEventListener('mousedown', startDrag);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('mousemove', scrollBarScroll)
        }
        
    }

    createScroller();


    // *** Listeners ***
    scrollContentWrapper.addEventListener('scroll', moveScroller);
}());

function set_height_scroller(){
  var height_scroller=($(".scrollable .content-wrapper").height()/$(".scrollable .content-wrapper .content").height())
  *$(".scrollable .content-wrapper").height();
  $(".scrollable .scroller").css("height",height_scroller);
}
set_height_scroller();

// $(".img-month-billing").click(function(){
//   $(this).addClass("dfasdfadsf")
// })



// $(".mCustomScrollbar-x").mCustomScrollbar({
//   axis:"x"
// });

// $(".meta-bottom-reporting .meta-right .ui.selection.dropdown").click(function(){
//   $(this).addClass("upward");
// })
$('.meta-bottom-reporting .meta-right .ui.dropdown')
  .dropdown({
    direction: 'upward'
  })
;
$( init );

function init() {
  $( ".droppable-area1, .droppable-area2" ).sortable({
      connectWith: ".connected-sortable",
      stack: '.connected-sortable ul'
    }).disableSelection();
}

//  var checkList = document.getElementById('list1');
// $('.anchor')[0].onclick = function(evt) {
//   if (checkList.classList.contains('visible'))
//     checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }
$(".dropdown-check-list .anchor").click(function(){
  if($(this).parents(".dropdown-check-list").find(".items").hasClass("visible")){
    $(this).parents(".dropdown-check-list").find(".items").removeClass("visible")
  }else{
    $(this).parents(".dropdown-check-list").find(".items").addClass("visible")
  }
})
// Lấy tất cả các grid container
const containers = document.querySelectorAll('.grid-container');

containers.forEach(container => {
  const resizer = container.querySelector('.resizer');
  if (!resizer) return;

  resizer.addEventListener('mousedown', function(e) {
    e.preventDefault();
    
    const startX = e.clientX;
    const leftElement = resizer.previousElementSibling;
    const startLeftWidth = leftElement.offsetWidth;
    
    // Lấy chiều rộng hiện tại của toàn bộ container
    const containerWidth = container.offsetWidth;

    function onMouseMove(e) {
      const deltaX = e.clientX - startX;
      let newLeftWidth = startLeftWidth + deltaX;

      // --- PHẦN CHỈNH SỬA CHÍNH ---
      const minWidth = 50; // Giới hạn nhỏ nhất
      const resizerWidth = resizer.offsetWidth; // Thường là 5px
      const maxWidth = containerWidth - resizerWidth -50; // Giới hạn lớn nhất (trừa lại 50px cho cột bên phải)

      // Ràng buộc giá trị trong khoảng [minWidth, maxWidth]
      if (newLeftWidth < minWidth) newLeftWidth = minWidth;
      if (newLeftWidth > maxWidth) newLeftWidth = maxWidth;

      // Áp dụng style
      container.style.gridTemplateColumns = `${newLeftWidth}px ${resizerWidth}px 1fr`;
      // ----------------------------
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'default';
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = 'col-resize';
  });
});