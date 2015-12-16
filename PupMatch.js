$(document).ready(function(){
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

            if (finalresults === 'INFP'){
            $('#results').append(
            '<img src="http://petparent.me/wp-content/uploads/2014/05/13527-Sable-Shetland-Sheepdog-Sheltie-white-background.jpg" />' + '<a href="http://www.akc.org/dog-breeds/shetland-sheepdog/">Shetland Sheepdog</a>  Bright, energetic and playful.  Loyal to the family, but reserve towards strangers. 
            </p>'
            )
      }
      });

    


      

});
      

      // $(function(){
      //       $("#results").click
      // }
      // $("#ESTJ").hide();
      // $("ESTJ").string.show();


// });