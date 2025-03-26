$(document).ready(function() {
    
    $('#addBtn').click(function() {
        var inputValue = $('#todoInput').val().trim(); 
        if (inputValue === "") {
            alert("Please enter a task.");
            return;
        }
        
    
        var listItem = $('<li>').text(inputValue); 
        var checkbox = $('<input type="checkbox">')
            .addClass('complete-checkbox')
            .click(function() {
                
                $(this).parent().toggleClass('completed');
                filterTasks();  
            });

        // Create the delete button
        var deleteButton = $('<button>')
            .text('Delete')
            .addClass('delete-btn')
            .click(function() {
                $(this).parent().remove(); 
                filterTasks(); 
            });

        listItem.prepend(checkbox).append(deleteButton);


        $('#todoList').append(listItem);

        $('#todoInput').val('');

        filterTasks();
    });

   
    $('#todoInput').keypress(function(e) {
        if (e.which === 13) {  
            $('#addBtn').click();
        }
    });

  
    $('#filterAll').click(function() {
        filterTasks('all');
    });

    $('#filterPending').click(function() {
        filterTasks('pending');
    });

    $('#filterCompleted').click(function() {
        filterTasks('completed');
    });

   
    function filterTasks(filter = 'all') {
        $('#todoList li').each(function() {
            var isCompleted = $(this).hasClass('completed');

            if (filter === 'all') {
                $(this).show();
            } else if (filter === 'pending' && !isCompleted) {
                $(this).show();
            } else if (filter === 'completed' && isCompleted) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

   
    filterTasks();
});
