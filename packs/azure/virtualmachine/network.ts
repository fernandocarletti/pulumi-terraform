// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Network extends lumi.NamedResource implements NetworkArgs {
    public readonly addressSpace: string[];
    public readonly dnsServers?: string[];
    public readonly location: string;
    public readonly _name: string;
    public readonly resourceGroupName: string;
    public readonly subnet?: { addressPrefix: string, _name: string, securityGroup?: string }[];
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: NetworkArgs) {
        super(name);
        this.addressSpace = args.addressSpace;
        this.dnsServers = args.dnsServers;
        this.location = args.location;
        this._name = args._name;
        this.resourceGroupName = args.resourceGroupName;
        this.subnet = args.subnet;
        this.tags = args.tags;
    }
}

export interface NetworkArgs {
    readonly addressSpace: string[];
    readonly dnsServers?: string[];
    readonly location: string;
    readonly _name: string;
    readonly resourceGroupName: string;
    readonly subnet?: { addressPrefix: string, _name: string, securityGroup?: string }[];
    readonly tags?: {[key: string]: any};
}
