const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      searchBtn = body.querySelector('.search_box'),
      modeSwitch = body.querySelector('.toggle_switch'),
      modeText = body.querySelector('.mode_text');
      
      modeSwitch.addEventListener('click', () => {
          body.classList.toggle('dark');

          if(body.classList.contains('dark')){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
      });

      toggle.addEventListener('click', () => {
          sidebar.classList.toggle('close');
      });
      searchBtn.addEventListener('click', () => {
          sidebar.classList.remove('close');
      })
    

      