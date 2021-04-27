alert("Hello")
$(document).ready(function () {
    $("#addmoreRows").click(function () {
        $("timline_add_row").append(
            '\
            <div class="timeline ">\
            <div class="timeline-body accordion-body">\
              <div class="timeline-item">\
                <p class="time">\
                <form autocomplete="off">\
                  <div class="flex-row d-flex ">\
                    <div class="w-30">\
                      <label class="margin-right-ab font-lao">ວັນທີ :</label>\
                      <div class="input-group input-daterange">\
                        <input type="text" class="datepicker" placeholder="DATE">\
                      </div>\
                    </div>\
                  </div>\
                </form>\
                </p>\
                <div class="content mt-0">\
                  <textarea placeholder="ພິມບ່ອນນີ້..." rows="4" cols="60" class="text-area-type"\
                    onkeypress="auto_grow(this);" onkeyup="auto_grow(this);"></textarea>\
                </div>\
              </div>\
            </div>\
          </div>\
        '
        );
        $( ".datepicker" ).datepicker();
    });
});
