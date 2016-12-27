var contextClass = (window.AudioContext || 
  window.webkitAudioContext || 
  window.mozAudioContext || 
  window.oAudioContext || 
  window.msAudioContext);
if (contextClass) {
  // Web Audio API is available.
  alert('Audio API available!');
  var context = new contextClass();
} else {
  // Web Audio API is not available. Ask the user to use a supported browser.
  alert('Audio API not found!');
}

function soundBuffer(){
	var instance;
	function getInstance(){
		if(this.instance===null){
		this.instance=new soundBuffer();
		}
	return this.instance;
	}
}

function soundChip(){

}

