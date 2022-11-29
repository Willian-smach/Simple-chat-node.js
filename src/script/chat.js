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
			$('#areaMessages').animate({
				scrollTop: $(this).height() // aqui introduz o numero de px que quer no scroll, neste caso é a altura da propria div, o que faz com que venha para o fim
			}, 100);
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
