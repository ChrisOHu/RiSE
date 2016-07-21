export BUCKET = 'up-storage';
export ENDPOINT = 'http://oss-cn-hangzhou.aliyuncs.com';
export BUCKET_FULL_URL = 'http://up-storage.oss-cn-hangzhou.aliyuncs.com/';

import ALY from 'aliyun-sdk'
import { OSS_SECRETS } from 'app/secrets'

/**
 * 杭州：http://oss-cn-hangzhou.aliyuncs.com
 * 北京：http://oss-cn-beijing.aliyuncs.com
 * 青岛：http://oss-cn-qingdao.aliyuncs.com
 * 深圳：http://oss-cn-shenzhen.aliyuncs.com
 * 香港：http://oss-cn-hongkong.aliyuncs.com
 * ##### 注意：如果你是在 ECS 上连接 OSS，可以使用内网地址，速度快，没有带宽限制。
 * 杭州：http://oss-cn-hangzhou-internal.aliyuncs.com
 * 北京：http://oss-cn-beijing-internal.aliyuncs.com
 * 青岛：http://oss-cn-qingdao-internal.aliyuncs.com
 * 深圳：http://oss-cn-shenzhen-internal.aliyuncs.com
 * 香港：http://oss-cn-hongkong-internal.aliyuncs.com
 */

export default new ALY.OSS({
  accessKeyId: OSS_SECRETS.accessKeyId,
  secretAccessKey: OSS_SECRETS.secretAccessKey,
  endpoint: ENDPOINT,
  // 这是 oss sdk 目前支持最新的 api 版本, 不需要修改
  apiVersion: '2013-10-15'
});
