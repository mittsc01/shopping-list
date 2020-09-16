$(
    function (){
        
        //add click handler to delete buttons
        $("ul").on('click','.shopping-item-delete',(e)=>{
            const itemToDelete=$(e.target).closest('li');
            
            itemToDelete.remove();
            
        })

        //add click handler to cross out groceries on list
        $("ul").on('click','.shopping-item-toggle',(e)=>{
            const itemToToggle=$(e.target).closest('li').find('.shopping-item');
            itemToToggle.toggleClass('shopping-item__checked');
        })

        //on form submit, add item to list
        $("form").on('submit',(e)=>{
            e.preventDefault();
            const itemToAdd=$(e.target).find('#shopping-list-entry')
            $('ul').append(`<li>
            <span class="shopping-item">${itemToAdd.val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`)
        })
    }
)