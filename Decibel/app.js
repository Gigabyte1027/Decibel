const jsmediatags = window.jsmediatags;

document.querySelector("#file").addEventListener("change", (event) => {
  
      const file = event.target.files[0];

    jsmediatags.read(file, {
        onSuccess: function(tag) {
            var tags = tag.tags;

            var picture = tags.tags.picture; // create reference to track art
            var base64String = "";
            for (var i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
            }

            document.getElementById('album-cover').style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
            document.getElementById('song-name').innerHTML = tag.tags.artist + " - " + tag.tags.title;
            document.getElementById('elapsed-time').innerHTML = "0:00";
        }
    });
});
