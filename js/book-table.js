const bookTable = (function($){
    const BOOK_TABLE_BODY = $("#bookTable tbody");

    function bookBuildTableRow(id) {
        const book = {id: id, ...bookForm.getData()};
        const bookTpl = _.template($("#bookTemplate").html());

        return bookTpl(book);
    }

    function addToTable() {
        BOOK_TABLE_BODY.append(bookBuildTableRow(_nextId));
    }

    function _findBookRowById(id) {
        return $("#bookTable button[data-id='" + id + "']").parents("tr")[0];
    }

    function updateInTable(id)
    {
        const row = _findBookRowById(id);
        const $row = $(row);

        // Adiciona a linha modifica na tabela
        $row.after(bookBuildTableRow());

        // Remover a linha antiga
        $row.remove();
    }

    return {
        addToTable: addToTable,
        updateInTable: updateInTable
    }
})(jQuery);