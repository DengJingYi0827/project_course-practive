var select = 1;
var preSelect = 1;
var sel_val = 0;
var photowidth = 230;
var countImage = 13;
var Mpage = Math.floor(countImage / 5);

// 網頁載入完成執行
$(document).ready(function () {
  $("#div-select").empty();
  // 將預覽圖div1~div13新增到#div-select元素
  for (var i = 1; i <= countImage; i++) {
    $("#div-select").append(
      // "<div id='div" + i + "'><img src='images/pic_" + i + ".jpg'></div>"
      `<div id='div${i}'><img src='images/jQCarousel1_img/pic_${i}.jpg'></div>`
      // `<div id='div${i}' data-index='${i}'><img src='images/pic_${i}.jpg'></div>`
    );
    $("#numcircle").append(
      `<div class="dot" data-pos="${i}"></div>`
      // `<div id='div${i}' data-index='${i}'><img src='images/pic_${i}.jpg'></div>`
    );
    //Passing data to the handler, 即pass num給fnChange, fnChange可由event.data.num取得值
    //https://api.jquery.com/on/
    // 預覽圖區塊div1~div13新增click事件處理函式fnChange
    // 按下預覽圖會傳送num參數，此參數為圖片編號
    $("#div" + preSelect).addClass("addBorder");
    $("#div" + i).on("click", { num: i }, fnChange);
    $(".dot[data-pos=" + i + "]").on("click", { num: i }, fnChange);
  }

  // $("#div-select").on("click", function () {
  //   sel_val -= 325;
  //   $("#div-select").css("left", sel_val + "px");
  // });
  // 判斷往左與右鈕是否出現
  // iconShow();
  // 按下往左鈕執行fnPrev函式
  // $("#btnPrev").on("dblclick", fnPrev);
  // 按下往右鈕執行fnNext函式
  // $("#btnNext").on("dblclick", fnNext);

  $("#btnPrev").on("click", fnPrev2);
  // 按下往右鈕執行fnNext函式
  $("#btnNext").on("click", fnNext2);
});

function fnChange(event) {
  // $(".addBorder").removeClass("showBorder");
  // 取得選取的圖片編號並組成完成圖檔
  // 取得選取的圖片編號並組成完成圖檔

  var filename = "images/jQCarousel1_img/pic_" + event.data.num + ".jpg";

  $("#div" + event.data.num).addClass("addBorder");
  // $("#div" + event.data.num).css("left", sel_val + "px");

  $(".dot[data-pos=" + event.data.num + "]").addClass("dot-on ");
  if (event.data.num >= 1 && event.data.num <= 9) {
    sel_val = 0 - (event.data.num - 1) * photowidth;
    $("#div-select").css("left", sel_val + "px");
  } else if (event.data.num > 9) {
    sel_val = 0 - 9 * photowidth;
    $("#div-select").css("left", sel_val + "px");
  }
  // $("#div-select").css("left", sel_val + "px");

  // 取得選取的圖片data-index之值並組成完成圖檔
  // console.log($(this));
  // console.log($(this).data('index'));
  // var filename = "images/pic_" + $(this).data('index') + ".jpg"
  if (preSelect != event.data.num) {
    $("#div" + preSelect).removeClass("addBorder");
    console.log("c");
    $(".dot[data-pos=" + preSelect + "]").removeClass("dot-on ");
    console.log("b");
    // 顯示圖片
    $("#show").attr("src", filename);
    console.log("a");
    // 呈現淡出動畫
    $("#show").hide().fadeIn(1000);

    // 保留這次被click的縮圖編號
    preSelect = event.data.num;
  }
}
// 判斷往左與右鈕是否出現
// function iconShow() {
//     if (select <= 0) {
//         $("#btnPrev").attr("style", "display:none;");
//     } else if (select >= Mpage) {
//         $("#btnNext").attr("style", "display:none;");
//     }
//     else {
//         $("#btnPrev").removeAttr("style");
//         $("#btnNext").removeAttr("style");
//
function fnPrev2() {
  //往右捲動動畫
  $("#div" + preSelect).removeClass("addBorder");
  console.log("c");
  $(".dot[data-pos=" + preSelect + "]").removeClass("dot-on ");
  console.log("b");

  if (preSelect == 1) {
    preSelect = 13;
    change(preSelect);
    sel_val -= 9 * photowidth;
    $("#div-select").css("left", sel_val + "px");
  } else {
    preSelect = preSelect - 1;
    change(preSelect);
    if (preSelect > 0 && preSelect < 10) {
      sel_val += photowidth;
      $("#div-select").css("left", sel_val + "px");
    }
  }
}
function change(allldd) {
  var filename = "images/jQCarousel1_img/pic_" + allldd + ".jpg";
  $("#div" + allldd).addClass("addBorder");
  // $("#div" + event.data.num).css("left", sel_val + "px");

  $(".dot[data-pos=" + allldd + "]").addClass("dot-on ");

  // 顯示圖片
  $("#show").attr("src", filename);
  // 呈現淡出動畫
  $("#show").hide().fadeIn(1000);
}
function fnNext2() {
  $("#div" + preSelect).removeClass("addBorder");
  console.log("c");
  $(".dot[data-pos=" + preSelect + "]").removeClass("dot-on ");
  console.log("b");

  if (preSelect == 13) {
    preSelect = 1;
    change(preSelect);
    sel_val += 9 * photowidth;
    $("#div-select").css("left", sel_val + "px");
  } else {
    preSelect = preSelect + 1;
    change(preSelect);
    if (preSelect < 11 && preSelect > 0) {
      sel_val -= photowidth;
      $("#div-select").css("left", sel_val + "px");
    }
  }
}
