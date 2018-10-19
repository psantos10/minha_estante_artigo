const bookForm = (function($){
    const BOOK_TITLE = $("#book_title");
    const BOOK_AUTHOR = $("#book_author");
    const BOOK_PUBLISHER = $("#book_publisher");
    const BOOK_UPDATE_BUTTON = $("#updateButton");

    function clear() {
        setData();
        BOOK_TITLE.focus();
    }

    function hasErrors() {
        return BOOK_TITLE.val() === null || BOOK_TITLE.val() === '';
    }

    function getData() {
        return {
            title: BOOK_TITLE.val(),
            author: BOOK_AUTHOR.val(),
            publisher: BOOK_PUBLISHER.val(),
        };
    }

    function setData(title='', author='', publisher='') {
        BOOK_TITLE.val(title);
        BOOK_AUTHOR.val(author);
        BOOK_PUBLISHER.val(publisher);
    }

    function setSubmitButtonText(str) {
        BOOK_UPDATE_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return BOOK_UPDATE_BUTTON.text();
    }

    return {
        clear: clear,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText,
    };
})(jQuery);