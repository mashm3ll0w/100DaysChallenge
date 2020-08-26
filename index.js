// 01 callback
// asynchronous means "happens in the future, not now"
// are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.

// example 01
downloadPhoto("https://download-from-site.com/photo.jpeg", handlePhoto);

function handlePhoto(error, photo){
  if (error){
    console.error("Download error!", error);
  }
  else{
    console.log("Download finished", photo)
  }
}

console.log("Download started...");

// downloadPhoto function is called and handlePhoto is passed as its callback...
// the callback wont run until the downloadPhoto runs and either returns an error or success...
// 