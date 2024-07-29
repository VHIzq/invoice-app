export interface PaymentActions {
    isDiscard?: ActionConfig;
    isDraft?: ActionConfig;
    isSend?: ActionConfig;
    isChange?: ActionConfig;
    isDelete?: ActionConfig;
    isCancel?: ActionConfig;
}

interface ActionConfig {
    isAction?: boolean;
    label?: string;
}