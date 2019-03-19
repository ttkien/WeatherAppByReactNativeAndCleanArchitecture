export class CloudinessModel {
    public cloudinessType: CloudinessType

    constructor(cloudinessType: CloudinessType) {
        this.cloudinessType = cloudinessType
    }
}

export enum CloudinessType {
    clear,
    sunny,
    partlyCloudy,
    mostlyCloudy,
    overcast,
    unknown
}