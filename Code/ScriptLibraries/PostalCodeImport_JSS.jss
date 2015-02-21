//名前空間モデル
PostalCodeImport = {};
PostalCodeImport.csvImport = function csvImport(){
	//アップロードされたファイルの取得
	
	//CSVの解析
	
	//Documentの作成・保存
	var postalCode, ken, shikuchouson, banchi;
	this._saveDocument(postalCode, ken, shikuchouson, banchi)
}
PostalCodeImport._saveDocument = function _saveDocument(postalCode,ken,shikuchouson,banchi){
	var newDoc:NotesDocument = database.createDocument();
	newDoc.replaceItemValue("form","PostalCode");
	newDoc.replaceItemValue("postalCode",postalCode);
	newDoc.replaceItemValue("ken",ken);
	newDoc.replaceItemValue("shikuchouson",shikuchouson);
	newDoc.replaceItemValue("banchi", banchi);
	newDoc.save();
}