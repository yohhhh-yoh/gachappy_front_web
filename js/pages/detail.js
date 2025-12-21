const params = new URLSearchParams(location.search);
const id = params.get('id');

console.log('商品ID:', id);
// このIDを使って商品データ取得
