
//http://jsfiddle.net/Jzs6B/2082/

$('#playlist li').each(function(){
$(this).click(function(){

var curUrl =$(this).attr("src");
$('#videoarea').attr("src",curUrl)

});
});

//https://stackoverflow.com/questions/26122115/detect-any-user-interaction
//Audio

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('playAudio').play();
    document.removeEventListener('click', musicPlay);
}

document.getElementById("playAudio").volume = 0.5;


/*
$("button").click(function() {
    var $target         = "obscure"+$(this).attr("rel");
    var $content_path   = "assets/";
    var $vid_obj        = vjs("div_video");

    // hide the current loaded poster
    $("img.vjs-poster").hide();

    $vid_obj.ready(function() {
      // hide the video UI
      $("#div_video_html5_api").hide();
      // and stop it from playing
      $vid_obj.pause();
      // assign the targeted videos to the source nodes
      $vid_obj.src([
        { type: "video/mp4", src: $content_path+$target+".mp4" },
        { type: "video/webm", src: $content_path+$target+".webm" },
        { type: "video/ogg", src: $content_path+$target+".ogv" }
      ]);
      // replace the poster source
      //$("img.vjs-poster").attr("src",$content_path+$target+".jpg").show();
      // reset the UI states
      $(".vjs-big-play-button").show();
      $("#div_video").removeClass("vjs-playing").addClass("vjs-paused");
      // load the new sources
      $vid_obj.load();
      $("#div_video_html5_api").show();
    });
});

$("input[rel='01']").click();
*/
