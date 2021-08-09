import java from 'js-to-java';

export interface IPnResult {
  cost?: number;
  data?: Object;
  message?: string;
  status?: string;
}

export class PnResult {
  constructor(params: IPnResult) {
    this.cost = params.cost;
    this.data = params.data;
    this.message = params.message;
    this.status = params.status;
  }

  cost?: number;
  data?: Object;
  message?: string;
  status?: string;

  __fields2java() {
    return {
      $class: 'cn.com.paneng.mcs.base.mcsbaseutilspringbootstarter.vo.PnResult',
      $: {
        cost: java.Long(this.cost),
        data:
          this.data && this.data['__fields2java']
            ? this.data['__fields2java']()
            : this.data,
        message: java.String(this.message),
        status: java.String(this.status),
      },
    };
  }
}

//generate by dubbo-js
