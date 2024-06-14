import c24 from '@ohos.security.cert'; import cryptoFramework from '@ohos.security.cryptoFramework'; import { LogUtil } from './LogUtil'; const a10 = '[RSAEncryptUtil]'; export class o17 { constructor(r24) { this.y22 = cryptoFramework.createAsyKeyGenerator('RSA1024'); this.z22 = cryptoFramework.createCipher('RSA1024|PKCS1'); this.a23 = r24; } b23() { if (this.a23 == undefined) { return Promise.reject(); } let j24 = { data: this.a23, encodingFormat: c24.EncodingFormat.FORMAT_DER }; let k24 = c24.createX509Cert(j24); return k24.then(cert => { this.publicKey = cert.getPublicKey(); return cert.verify(this.publicKey); }) .then(() => { if (this.publicKey !== undefined) { this.c23 = { data: this.publicKey.getEncoded().data }; return this.y22.convertKey(this.c23, null); } else { const q24 = `createRSA this.publicKey === undefined`; throw new Error(q24); } }).then(p24 => { this.d23 = p24; return this.z22.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, this.d23.pubKey, null); }) .catch((error) => { LogUtil.e(a10, `catch error, ${error.code}, ${error.message}`, ''); }); } j17(i24) { return this.z22.doFinal({ data: i24 }); } i17(d24) { let e24 = { data: d24 }; return this.y22.convertKey(e24, null).then((h24) => { this.d23 = h24; return this.z22.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, this.d23.pubKey, null); }).catch((error) => { LogUtil.e(a10, `catch error, ${error.code}, ${error.message}`, ''); }); } } 