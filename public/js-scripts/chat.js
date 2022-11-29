var socket = io('http://localhost:3001');
		$(() => {
    $("#send").click(()=>{
       sendMessage({
          name: $("#name").val(),
          messageText:$("#message").val()});
        })
      getMessages();
			scrollAndCleanScreen();
    })

		socket.on('message', addMessages);


		function scrollAndCleanScreen(){
			const altura = document.getElementById('messages')
			altura.scrollTop = altura.scrollHeight;
		}

		function addMessages(message){
			$("#messages").append(`
					<h4> ${message.name} </h4>
					<p>  ${message.messageText} </p>`)
			}

		function getMessages(){
			$.get('http://localhost:3001/messages', (data) => {
			data.forEach(addMessages);
			})
		}

		function sendMessage(message){
			$.post('http://localhost:3001/messages', message)
		}

function showModal(){
	const modal = document.getElementById('modalChat');
	const actualStyle = modal.style.display;

	if(actualStyle == 'block'){
		modal.style.display = 'none';
	}else{
		modal.style.display = 'block';
	}
	console.log('aqui')
}
