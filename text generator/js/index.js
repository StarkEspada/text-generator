var numberParagraphs = document.querySelector(".number-paragraphs");
var numberSentence = document.querySelector(".number-sentence");
var conatinerTextParagraphs = document.querySelector(".conatiner-text-paragraphs");
var conatinerTextSentence = document.querySelector(".conatiner-text-sentence");
var generateParagraphs = document.querySelector(".generate-paragraphs");
var generateSentence = document.querySelector(".generate-sentence");
var onOffParagraphs = document.querySelector(".on-off-paragraphs");
var onOffSentence = document.querySelector(".on-off-sentence");

var link = "https://fish-text.ru/get?"
var dataTextParagraphs = [];
var dataTextSentence = [];


numberParagraphs.style.display = "none";
numberSentence.style.display = "none";

onOffParagraphs.addEventListener("click", function(){
	onOffParagraphs.style.display = "none"
	numberParagraphs.style.display = "inline-block";

	generateParagraphs.addEventListener("click", function(){
		dataTextParagraphs = []
		var numberParagraphsValue = +numberParagraphs.value;

		var typeParagraph = "paragraph"
		var paramsParagraph = "&type=" + typeParagraph + "&number=" + numberParagraphsValue

		var query = link + paramsParagraph
/*		console.log(query)*/

		$.getJSON(query, function(data) {
			var data = data["text"]
			
			dataTextParagraphs.push(data)
			data = data.replace(/n/g, '<br>');
			data = data.replace(/\\/g, '');//экронировал экронирующий символ
			conatinerTextParagraphs.innerHTML = data 
			
		})
	})
})

onOffSentence.addEventListener("click", function(){
	onOffSentence.style.display = "none"
	numberSentence.style.display = "inline-block";

		generateSentence.addEventListener("click", function(){
			dataTextSentence = [];

			var numberSentenceValue = +numberSentence.value;

			var typeSentence = "sentence"
			var paramsSentence = "&type=" + typeSentence + "&number=" + numberSentenceValue
			var query = link + paramsSentence

				$.getJSON(query, function(data) {
					var data = data["text"]
					dataTextSentence.push(data)
/*					data = data.replace(/\./g, '<br>');
					data = data.replace(/\?/g, '<br>');
					data = data.replace(/!/g, '<br>');*/
					conatinerTextSentence.innerHTML = data

				})

		})
})
















/*var str = containerText.innerHTML
		var symbols = str.split("")
		for(var i = 0; i < symbols.length; i++){
			if(symbols[i] == "n"){
				symbols[i].slice(symbols[i])
			}
		}
		console.log(symbols[i])*/