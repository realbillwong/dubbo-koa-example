import { PnResult } from './../../../mcsbaseutilspringbootstarter/vo/PnResult';
import { argumentMap, JavaList, JavaBoolean } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'apache-dubbo-consumer';

export interface ICardManageApiDubboClient {
  listCardInfosByDeviceMridList(
    mridList: JavaList,
    currentFlag: JavaBoolean,
  ): TDubboCallResult<PnResult>;
  testDubbo(): TDubboCallResult<PnResult>;
  listCardInfoWithLocationsByDeviceMridList(
    mridList: JavaList,
    currentFlag: JavaBoolean,
  ): TDubboCallResult<PnResult>;
}

export const CardManageApiDubboClientWrapper = {
  listCardInfosByDeviceMridList: argumentMap,
  testDubbo: argumentMap,
  listCardInfoWithLocationsByDeviceMridList: argumentMap,
};

export function CardManageApiDubboClient(
  dubbo: Dubbo,
): ICardManageApiDubboClient {
  return dubbo.proxyService<ICardManageApiDubboClient>({
    dubboInterface:
      'cn.com.paneng.mcs.base.dubbo.api.client.CardManageApiDubboClient',
    methods: CardManageApiDubboClientWrapper,
  });
}

// generate by dubbo-js
