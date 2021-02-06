	const users = [
					"https://roktimashraful.blogsport.com",
					"https://roktimashraful.blogsport.com",
					"https://roktimashraful.blogsport.com",
					"https://ordinaryit.com",

				  ];
		let userlenth = users.length;
		let getdata = 'https://ordinaryit.com';
		for (let i = userlenth - 1; i >= 0; i--) {
			if(getdata === users[i]){
				data = true;
				break ; 
			}
			data= false;
		}

		const  redirect = () =>{
			window.location = "https://ordinaryit.com"
		}
		if(data == false){
			redirect();
		}
