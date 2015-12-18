$(document).ready(function(){


      // var resultQ1 = function(){

      //       $("#q1").click("#results");

      //       var personalityResults = $("input[name='q1']:checked").val();
      // }
      
      // still need to fix CSS, add the API + create a new variable for each dog to feed the api
      
      var personalityResults1, personalityResults2, personalityResults3, personalityResults4
      $(".Submit").click(function(event){
            //prevent send form
            event.preventDefault();
            //get results from each radio button
            console.log("submit button clicked");
            personalityResults1 = $("input[name='q1']:checked").val();
            console.log("personalityResults: ", personalityResults1);
            personalityResults2 = $("input[name='q2']:checked").val();
            console.log("personalityResults2: ", personalityResults2);
            personalityResults3 = $("input[name='q3']:checked").val();
            console.log("personalityResults3: ", personalityResults3);
            personalityResults4 = $("input[name='q4']:checked").val();
            console.log("personalityResults4: ", personalityResults4);

            //create string of results
            var finalresults = personalityResults1 + personalityResults2 + personalityResults3 + personalityResults4;
            console.log(finalresults)

            //var to be filled w/ dogbreed
            var dogBreed

            //results
            var intro = 'Your Myer-Briggs personality is ';

            if (finalresults === 'ENFP'){
                  $('#results').append( intro + finalresults +'<img src="http://imgs.sfgate.com/blogs/images/sfgate/pets/2010/06/11/border_collie3.jpg">' + '<a href="http://www.akc.org/dog-breeds/border-collie/">Border Collie</a> ' +'<p>Extremely energetic, smart, and affectionate.</p>');
                  dogBreed = 'Border+Collie';
                  };

            if (finalresults === 'ENFJ'){
                  $('#results').append( intro + finalresults +'<img src="http://petparent.me/wp-content/uploads/2014/05/13527-Sable-Shetland-Sheepdog-Sheltie-white-background.jpg">' + '<a href="http://www.akc.org/dog-breeds/shetland-sheepdog/">Shetland Sheepdog</a> ' +'<p>Bright, energetic and playful.  Loyal to the family, but reserved towards strangers.</p>');
                  dogBreed = 'Shetland+Sheepdog+Sheltie';
                  };

            if (finalresults === 'ENTP'){
                  $('#results').append( intro + finalresults +'<img src="http://cf.ltkcdn.net/dogs/images/std/65325-371x324-Great_dane.jpg">' + '<a href="http://www.akc.org/dog-breeds/great-dane/">Great Dane</a> ' +'<p>Friendly, patient, and dependable.</p>');
                  dogBreed = 'Great+Dane';
                  };

            if (finalresults === 'ENTJ'){
                  $('#results').append( intro + finalresults +'<img src="http://www.rarebreed.com/breeds/kelpie/austrailiankelpie.jpg">' + '<a href="http://www.dogbreedinfo.com/australiankelpie.html">Austrialian Kelpie</a> ' +'<p>A compact, robust, and enthusiastic working dog.</p>');
                  dogBreed = 'Australian+Kelpie';
                  };

            if (finalresults === 'ESFP'){
                  $('#results').append( intro + finalresults +'<img src="https://upload.wikimedia.org/wikipedia/en/0/07/Home_cocker_spaniel.jpg">' + '<a href="http://http://www.akc.org/dog-breeds/cocker-spaniel/">Cocker Spaniel</a> ' +'<p>Gentle, happy, and smart.</p>');
                  dogBreed = 'Cocker+Spaniel';
                  };

            if (finalresults === 'ESTJ'){
                  $('#results').append( intro + finalresults +'<img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Toy_Fox_Terrier_2.jpg">' + '<a href="http://www.akc.org/dog-breeds/toy-fox-terrier/">Toy Fox Terrier</a> ' +'<p>Intelligent, Alert, Friendly</p>');
                  dogBreed = 'Toy+Fox+Terrier';
                  };

            if (finalresults === 'ESTP'){
                  $('#results').append( intro + finalresults +'<img src="http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Dalmatian-2.jpg">' + '<a href="http://www.akc.org/dog-breeds/dalmatian/">Dalmatian</a> ' +'<p>Outgoing, Diginified, Smart.</p>');
                  dogBreed = 'Dalmatian';
                  };

            if (finalresults === 'ESFJ'){
                  $('#results').append( intro + finalresults +'<img src="http://www.yourpurebredpuppy.com/dogbreeds/photos-AB/bullmastiffsf5.jpg">' + '<a href="http://www.akc.org/dog-breeds/bullmastiff/">Bullmastiff</a> ' +'<p>Brave, affectionate, and loyal.</p>');
                  dogBreed = 'Bullmastiff';
                  };

            if (finalresults === 'INFP'){
                  $('#results').append( intro + finalresults +'<img src="http://www.trainpetdog.com/images2/bernesemountaindog4.jpg">' + '<a href="http://www.akc.org/dog-breeds/bernese-mountain-dog/">Bernese Mountain Dog</a> ' +'<p>Good-natured, calm, and strong.</p>');
                  dogBreed = 'Bernese+Mountain+Dog';
                  };

            if (finalresults === 'INFJ'){
                  $('#results').append( intro + finalresults +'<img src="http://www.animal-photography.com/images/ailpeww4o.jpg">' + '<a href="http://www.akc.org/dog-breeds/collie">Collie</a> ' +'<p>Graceful, devoted, and proud.</p>');
                  dogBreed = 'Collie';
                  };

            if (finalresults === 'INTP'){
                  $('#results').append( intro + finalresults +'<img src="https://s-media-cache-ak0.pinimg.com/236x/32/75/fb/3275fb17310c9a60ea7ad20e52d97606.jpg">' + '<a href="http://www.akc.org/dog-breeds/giant-schnauzer/">Giant Schnauzer</a> ' +'<p>Loyal, alert, trainable.</p>');
                  dogBreed = 'Giant+Schnauzer';
                  };

            if (finalresults === 'INTJ'){
                  $('#results').append( intro + finalresults +'<img src="http://cdn-www.dailypuppy.com/dog-images/bunny-the-dachshund-7_48531_2010-08-20_w450.jpg">' + '<a href="http://www.akc.org/dog-breeds/dachshund/">Dachshund</a> ' +'<p>Spunky, curious, friendly.</p>');
                  dogBreed = 'Dachshund';
                  };

            if (finalresults === 'ISFP'){
                  $('#results').append( intro + finalresults +'<img src="https://s-media-cache-ak0.pinimg.com/236x/36/30/5f/36305f94f60c0df3caa868c4d73564b5.jpg">' + '<a href="http://www.akc.org/dog-breeds/labrador-retriever/">Labrador Retriever</a> ' +'<p>Friendly, active, outgoing.</p>');
                  dogBreed = 'Labrador+Retriever';
                  };

            if (finalresults === 'ISTJ'){
                  $('#results').append( intro + finalresults +'<img src="hhttps://s.graphiq.com/sites/default/files/465/media/images/t2/Jack_Russell_Terrier_5687866.jpg">' + '<a href="http://www.dogbreedinfo.com/jackrussellterrier.htm">Jack Russell Terrier</a> ' +'<p>Cheerful, merry, and devoted.</p>');
                  dogBreed = 'Jack+Russell+Terrier';
                  };

            if (finalresults === 'ISTP'){
                  $('#results').append( intro + finalresults +'<img src="http://nextranks.com/data_images/dogs/doberman-pinscher/doberman-pinscher-03.jpg">' + '<a href="http://www.akc.org/dog-breeds/doberman-pinscher/">Doberman Pinscher</a> ' +'<p>Watchful, fearful, obedient.</p>');
                  dogBreed = 'Doberman';
                  };

            if (finalresults === 'ISFJ'){
                  $('#results').append( intro + finalresults +'<img src="http://www.wcrotts.com/Gallery%20Pics/A/Arzadon%20Larimbo/Arzadons%20Larimbo%2017%20months.jpg">' + '<a href="http://www.akc.org/dog-breeds/rottweiler/">Rottweiler</a> ' +'<p>Show-off and affectionate to family but reserved to strangers.</p>');
                  dogBreed = 'Rottweiler';
                  };



            //calling the api
            $(".animalsNearYou").click(function(){

            	event.preventDefault();

        		$.getJSON('http://api.petfinder.com/pet.find?format=json&key=ddc7ef71cbc19cde8a016e85f90c9c27&location=94103&animal=dog&breed=' + [dogBreed] + '&callback=?')
          			.done(function(petApiData) { 
          			console.log("data retrieved: ", petApiData);
          			$('#petfinderAnimals').append('<h3>' + (petApiData.petfinder.pets.pet[0].name.$t)  + '</h3>');
          			$('#petfinderAnimals').append('<p> currently in '+ (petApiData.petfinder.pets.pet[0].contact.city.$t) + '</p>');
          			$('#petfinderAnimalsPicture').append('<img src ='+ (petApiData.petfinder.pets.pet[0].media.photos.photo[0].$t) + '/>');
          			$('#petfinderAnimalsPicture').append('<p> Description: '+ (petApiData.petfinder.pets.pet[0].description.$t) + '</p>');
          			// $('#petfinderAnimals').append(petApiData.petfinder.pets.pet[0].media.photos.photo[0].$t);
          			// .error(function(err) { alert('Error retrieving data!');
          			$('#petfinderAnimals2').append('<h3>' + (petApiData.petfinder.pets.pet[1].name.$t)  + '</h3>');
          			$('#petfinderAnimals2').append('<p> currently in '+ (petApiData.petfinder.pets.pet[1].contact.city.$t) + '</p>');
          			$('#petfinderAnimalsPicture2').append('<img src ='+ (petApiData.petfinder.pets.pet[1].media.photos.photo[0].$t) + '/>');
          			$('#petfinderAnimalsPicture2').append('<p> Description: '+ (petApiData.petfinder.pets.pet[1].description.$t) + '</p>');

          			$('#petfinderAnimals3').append('<h3>' + (petApiData.petfinder.pets.pet[2].name.$t) + '</h3>');
          			$('#petfinderAnimals3').append('<p> currently in '+ (petApiData.petfinder.pets.pet[2].contact.city.$t) + '</p>');
          			$('#petfinderAnimalsPicture3').append('<img src ='+ (petApiData.petfinder.pets.pet[2].media.photos.photo[0].$t) + '/>');
          			$('#petfinderAnimalsPicture3').append('<p> Description: '+ (petApiData.petfinder.pets.pet[2].description.$t) + '</p>');
        		});

          	//append to the bottom of the html using object[#]	
            	// $("#petfinderAnimals")
            


      		});

    


      

	});
      


      // $(function(){
      //       $("#results").click
      // }
      // $("#ESTJ").hide();
      // $("ESTJ").string.show();


});