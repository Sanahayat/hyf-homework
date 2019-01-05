const watchFirstEpisode = function() {
                                                /*  watchFirstEpisode(); 
                                                    watchBreakingBad();   
                                                    finishMondayEvening(watchBreakingBad);
                                                */
    console.log('Watch first episode');
  };
  
  const watchBreakingBad = function() {
    console.log('Watching Breaking bad');
                                                /*  watchBreakingBad();   
                                                    finishMondayEvening(watchBreakingBad);
      
                                                */
    watchFirstEpisode();                        // jump to line # 1
    console.log('No more for today');
  };
  
  const goForARun = function() {
    console.log('Im running! look at me!');
  }
  
  const helpStudentsWithHomework = function() {
                                                /*  helpStudentsWithHomework();   
                                                    finishMondayEvening(watchBreakingBad);
                                                */
    console.log('Help help help');
  }
  
  function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();                  /*  watchBreakingBad();   //jump to line # 9
                                                    finishMondayEvening(watchBreakingBad);
                                                */
    
    goForARun();
                                                /*  goForARun();   //jump to line # 19
                                                    finishMondayEvening(watchBreakingBad);
                                                */
    helpStudentsWithHomework();
                                                /*   helpStudentsWithHomework();  //jump to line # 23
                                                     finishMondayEvening(watchBreakingBad);
                                                */
    console.log('done for today')
                                                //   finishMondayEvening(watchBreakingBad);
  }
  
  // stack is empty at this point.
  finishMondayEvening(watchBreakingBad); // finishMondayEvening(watchBreakingBad); in call stack. jump to line # 30
  

  /* Console logs:

    Watching Breaking bad
    Watch first episode
    No more for today
    Im running! look at me!
    Help help help
    done for today

   */