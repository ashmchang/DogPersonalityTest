$(document).ready(function(){


      var resultQ1 = function(){

            $("#q1").click("#results");

            var personalityResults = $("input[name='q1']:checked").val();
      }
      


      // var personalityResults = ''
      // personalityResults = personalityResults.append('#q1');
      // personalityResults = personalityResults.append('#q2');
      // personalityResults = personalityResults.append('#q3');
      // personalityResults = personalityResults.append('#q4');

      // console.log(personalityResults);

      // var resultString = $("#results").

      // var resultString = "";
      // var result = function(){

           

      //       var personalityResults = $("input[name='q1']:checked").val();
      //       personalityResults += ("q1").val;

      //       personalityResults += ("q2");
      //       personalityResults += ("q3");
      //       personalityResults += ("q4");

      // } 
      // $(".Submit").click("#results");
      var personalityResults1, personalityResults2, personalityResults3, personalityResults4
      $(".Submit").click(function(event){
            event.preventDefault();
            console.log("submit button clicked");
            personalityResults1 = $("input[name='q1']:checked").val();
            console.log("personalityResults: ", personalityResults1);
            personalityResults2 = $("input[name='q2']:checked").val();
            console.log("personalityResults2: ", personalityResults2);
            personalityResults3 = $("input[name='q3']:checked").val();
            console.log("personalityResults3: ", personalityResults3);
            personalityResults4 = $("input[name='q4']:checked").val();
            console.log("personalityResults4: ", personalityResults4);

            var finalresults = personalityResults1 + personalityResults2 + personalityResults3 + personalityResults4;
            console.log(finalresults)

            // var result1 = '<img src="http://petparent.me/wp-content/uploads/2014/05/13527-Sable-Shetland-Sheepdog-Sheltie-white-background.jpg">' + '<p>Bright, energetic and playful.  Loyal to the family, but reserve towards strangers.</p>'

            var intro = 'Your Myer-Briggs personality is ';

            if (finalresults === 'ENFP'){
                   $('#results').append( intro + finalresults +'<img src="http://imgs.sfgate.com/blogs/images/sfgate/pets/2010/06/11/border_collie3.jpg">' + '<a href="http://www.akc.org/dog-breeds/border-collie/">Border Collie</a> ' +'<p>Extremely energetic, smart, and affectionate.</p>');
                  };

            if (finalresults === 'ENFJ'){
                  $('#results').append( intro + finalresults +'<img src="http://petparent.me/wp-content/uploads/2014/05/13527-Sable-Shetland-Sheepdog-Sheltie-white-background.jpg">' + '<a href="http://www.akc.org/dog-breeds/shetland-sheepdog/">Shetland Sheepdog</a> ' +'<p>Bright, energetic and playful.  Loyal to the family, but reserved towards strangers.</p>');
                  };

            // if (finalresults === 'ENTP'){
            //       $('#results').append( intro + finalresults +'<img src="http://petparent.me/wp-content/uploads/2014/05/13527-Sable-Shetland-Sheepdog-Sheltie-white-background.jpg">' + '<a href="http://www.akc.org/dog-breeds/shetland-sheepdog/">Shetland Sheepdog</a> ' +'<p>Bright, energetic and playful.  Loyal to the family, but reserved towards strangers.</p>');
            //       };

            if (finalresults === 'ENTJ'){
                  $('#results').append( intro + finalresults +'<img src="http://www.rarebreed.com/breeds/kelpie/austrailiankelpie.jpg">' + '<a href="http://www.dogbreedinfo.com/australiankelpie.html">Austrialian Kelpie</a> ' +'<p>A compact, robust, and enthusiastic working dog.</p>');
                  };

            if (finalresults === 'ESFP'){
                  $('#results').append( intro + finalresults +'<img src="https://upload.wikimedia.org/wikipedia/en/0/07/Home_cocker_spaniel.jpg">' + '<a href="http://http://www.akc.org/dog-breeds/cocker-spaniel/">Cocker Spaniel</a> ' +'<p>Gentle, happy, and smart.</p>');
                  };

            if (finalresults === 'ESTJ'){
                  $('#results').append( intro + finalresults +'<img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Toy_Fox_Terrier_2.jpg">' + '<a href="http://www.akc.org/dog-breeds/toy-fox-terrier/">Toy Fox Terrier</a> ' +'<p>Intelligent, Alert, Friendly</p>');
                  };

            if (finalresults === 'ESTP'){
                  $('#results').append( intro + finalresults +'<img src="http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Dalmatian-2.jpg">' + '<a href="http://www.akc.org/dog-breeds/dalmatian/">Dalmation</a> ' +'<p>Outgoing, Diginified, Smart.</p>');
                  };
      });

    


      

});
      


      // $(function(){
      //       $("#results").click
      // }
      // $("#ESTJ").hide();
      // $("ESTJ").string.show();


// });