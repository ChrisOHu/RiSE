import ALY from 'aliyun-sdk'
import { OSS_SECRETS } from 'app/secrets'
import { hmac, Base64 } from 'app/utils/crypto'

const BUCKET = 'up-storage';
const ENDPOINT = 'http://oss-cn-hangzhou.aliyuncs.com';
const BUCKET_FULL_URL = 'http://up-storage.oss-cn-hangzhou.aliyuncs.com/';

/**
 * see: https://help.aliyun.com/document_detail/31849.html
 */
const POST_POLICY =
  "{\"expiration\":\"2048-12-25T12:00:00Z\",\"conditions\":[[\"content-length-range\", 0, 104857600]]}"
const BASE64_ENCODED_POST_POLICY = Base64.encode(POST_POLICY)
const SIGNATURE = hmac(OSS_SECRETS.secretAccessKey, BASE64_ENCODED_POST_POLICY, 'base64', 'sha1')

function uploadFile(fileUri, fileKey, fileName, fileType = "application/octet-stream") {
  let formData = new FormData();
  formData.append("OSSAccessKeyId", OSS_SECRETS.accessKeyId);
  formData.append("policy", BASE64_ENCODED_POST_POLICY);
  formData.append("signature", SIGNATURE);
  formData.append("key", fileKey);
  formData.append('file', {uri: fileUri, name: fileName, type: fileType});

  let options = {
    body: formData,
    method: 'post'
  }

  return fetch(BUCKET_FULL_URL, options);
}

export default {
  uploadFile
}
