<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
      $("#btn1").click(function(){
        $("etl_addrow_tag").append('\
        <div class="row"> \
            <div class="col-6">\
                <label for="formFile" class="form-label text-center mb-0 ETL_copyright_text">CELL NAME </label>\
                <input class="form-control" type="text" placeholder="Enter site name here..." name="cellname">\
            </div>\
            <div class="col-6">\
                <label for="formFile" class="form-label text-center mb-0 ETL_copyright_text" >ARFCN </label>\
                <input class="form-control" type="text" placeholder="Enter ARFCN here..." name="arfcn" >\
            </div>\
        </div>\
        ');
      });
    });
</script>