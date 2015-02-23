//名前空間モデル
PostalCodeImport = {};
PostalCodeImport.csvImport = function csvImport(){
	//アップロードされたファイルの取得
	var con = facesContext.getExternalContext(); 
	var request = con.getRequest(); 
	var map = request.getParameterMap(); 
	//<input type="file" name="postalCodeCsv" />
	//の "name"に指定した値を指定する
	var fileData = map.get("postalCodeCsv"); 
	var file = fileData.getServerFile();
	var fileReader = new java.io.FileReader(file);
	//CSVの解析
	var csvReader = org.supercsv.io.CsvListReader(
			fileReader,
			org.supercsv.prefs.CsvPreference.STANDARD_PREFERENCE);
	var line = csvReader.read();
	while(!!line){
		//Documentの作成・保存
		this._saveDocument(line[2], line[6], line[7], line[8]);
		line = csvReader.read();
	}
}
PostalCodeImport._saveDocument = function _saveDocument(postalCode, ken, shikuchouson, chouiki){
	var newDoc:NotesDocument = database.createDocument();
	newDoc.replaceItemValue("form","PostalCode");
	newDoc.replaceItemValue("postalCode",postalCode);
	newDoc.replaceItemValue("ken",ken);
	newDoc.replaceItemValue("shikuchouson",shikuchouson);
	newDoc.replaceItemValue("chouiki",chouiki);
	newDoc.save();
}