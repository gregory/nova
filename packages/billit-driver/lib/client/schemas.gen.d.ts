export declare const AccountInformationSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Email: {
            readonly type: "string";
        };
        readonly Companies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/AccountInformationParty";
            };
        };
        readonly UserCompanyRoles: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/UserCompanyRole";
            };
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
        readonly ExternalProviderTC: {
            readonly type: "string";
        };
        readonly FirstName: {
            readonly type: "string";
        };
        readonly LastName: {
            readonly type: "string";
        };
        readonly LoginOrRegisterNeeded: {
            readonly type: "boolean";
        };
        readonly NationalIdentityNumber: {
            readonly type: "string";
        };
        readonly CardNumber: {
            readonly type: "string";
        };
        readonly PhoneNumber: {
            readonly type: "string";
        };
        readonly UniqueReference: {
            readonly type: "string";
        };
    };
};
export declare const AccountInformationPartySchema: {
    readonly type: "object";
    readonly properties: {
        readonly TabNameAlias: {
            readonly type: "string";
        };
        readonly APIAllowed: {
            readonly type: "boolean";
        };
        readonly LogoFileID: {
            readonly format: "uuid";
            readonly type: "string";
            readonly example: "00000000-0000-0000-0000-000000000000";
        };
        readonly APIEnabledFeatures: {
            readonly $ref: "#/definitions/APIEnabledFeatures";
        };
        readonly UserLanguage: {
            readonly type: "string";
        };
        readonly PartyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly BookYearStart: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Nr: {
            readonly type: "string";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly CommercialName: {
            readonly type: "string";
        };
        readonly Addresses: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PartyAddress";
            };
        };
        readonly Street: {
            readonly type: "string";
        };
        readonly StreetNumber: {
            readonly type: "string";
        };
        readonly Box: {
            readonly type: "string";
        };
        readonly Zipcode: {
            readonly type: "string";
        };
        readonly CostCategoryCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AccountingCostTypeName: {
            readonly type: "string";
        };
        readonly City: {
            readonly type: "string";
        };
        readonly CountryCode: {
            readonly type: "string";
        };
        readonly IBAN: {
            readonly type: "string";
        };
        readonly BIC: {
            readonly type: "string";
        };
        readonly Mobile: {
            readonly type: "string";
        };
        readonly Phone: {
            readonly type: "string";
        };
        readonly Fax: {
            readonly type: "string";
        };
        readonly Email: {
            readonly type: "string";
        };
        readonly Website: {
            readonly type: "string";
        };
        readonly Contact: {
            readonly type: "string";
        };
        readonly ContactFirstName: {
            readonly type: "string";
        };
        readonly ContactLastName: {
            readonly type: "string";
        };
        readonly VATNumber: {
            readonly type: "string";
        };
        readonly PeppolIdentifier: {
            readonly type: "string";
        };
        readonly RPR: {
            readonly type: "string";
        };
        readonly LastModified: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Created: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly PartyType: {
            readonly enum: readonly ["Customer", "Supplier"];
            readonly type: "string";
        };
        readonly VATLiable: {
            readonly type: "boolean";
        };
        readonly AccountantCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly GLAccountCode: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly Language: {
            readonly type: "string";
        };
        readonly VentilationCode: {
            readonly type: "string";
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
        readonly ExternalProviderTC: {
            readonly type: "string";
        };
        readonly CustomFields: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/MutableKeyValuePair_StringString";
            };
        };
        readonly BankAccounts: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/BankAccount";
            };
        };
        readonly Users: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/UserCoreInfo";
            };
        };
        readonly DefaultPaymentMethodTC: {
            readonly type: "string";
        };
        readonly DomiciliationMandateID: {
            readonly type: "string";
        };
        readonly DomiciliationMandateSigningDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly DefaultPaid: {
            readonly type: "boolean";
        };
        readonly DisplayName: {
            readonly type: "string";
        };
        readonly DefaultTransportTypeTC: {
            readonly type: "string";
        };
        readonly FinancialReductionPercentageDefault: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly FinancialReductionDaysDefault: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly DefaultExpiryOffset: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly GLDefaultExpiryOffset: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly Role: {
            readonly type: "string";
        };
        readonly InternalInfo: {
            readonly type: "string";
        };
        readonly VATDeductable: {
            readonly type: "boolean";
        };
        readonly DefaultReductionPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Identifiers: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PartyIdentifier";
            };
        };
        readonly BookCategoryTC: {
            readonly type: "string";
        };
        readonly SmallEnterprise: {
            readonly type: "boolean";
        };
        readonly AutoSendInvoiceReminders: {
            readonly type: "boolean";
        };
        readonly DefaultCurrencyTC: {
            readonly type: "string";
        };
        readonly Regime: {
            readonly type: "string";
        };
        readonly SubRegime: {
            readonly type: "string";
        };
        readonly IsHighRisk: {
            readonly type: "boolean";
        };
        readonly SendUBL: {
            readonly type: "boolean";
        };
        readonly SendPDF: {
            readonly type: "boolean";
        };
    };
};
export declare const UserCompanyRoleSchema: {
    readonly type: "object";
    readonly properties: {
        readonly PartyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly UserRoleTypes: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
export declare const APIEnabledFeaturesSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TimeRegistration: {
            readonly type: "boolean";
        };
        readonly Projects: {
            readonly type: "boolean";
        };
        readonly DailyReceipts: {
            readonly type: "boolean";
        };
        readonly FinancialReduction: {
            readonly type: "boolean";
        };
        readonly GLAccounts: {
            readonly type: "boolean";
        };
        readonly Cashbook: {
            readonly type: "boolean";
        };
    };
};
export declare const PartyAddressSchema: {
    readonly type: "object";
    readonly properties: {
        readonly AddressType: {
            readonly type: "string";
        };
        readonly Tav: {
            readonly type: "string";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly Street: {
            readonly type: "string";
        };
        readonly StreetNumber: {
            readonly type: "string";
        };
        readonly Box: {
            readonly type: "string";
        };
        readonly Zipcode: {
            readonly type: "string";
        };
        readonly City: {
            readonly type: "string";
        };
        readonly CountryCode: {
            readonly type: "string";
        };
        readonly Phone: {
            readonly type: "string";
        };
    };
};
export declare const MutableKeyValuePair_StringStringSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Key: {
            readonly type: "string";
        };
        readonly Value: {
            readonly type: "string";
        };
    };
};
export declare const BankAccountSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IBAN: {
            readonly type: "string";
        };
        readonly BIC: {
            readonly type: "string";
        };
        readonly Currency: {
            readonly type: "string";
        };
        readonly Verified: {
            readonly type: "boolean";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly Saldo: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
        readonly LogoFileID: {
            readonly format: "uuid";
            readonly type: "string";
            readonly example: "00000000-0000-0000-0000-000000000000";
        };
        readonly LogoFileUrl: {
            readonly type: "string";
        };
        readonly CountryCode: {
            readonly type: "string";
        };
        readonly BankAccountName: {
            readonly type: "string";
        };
        readonly BankProviderStatus: {
            readonly type: "string";
        };
        readonly AccountIdentification: {
            readonly type: "string";
        };
        readonly Active: {
            readonly type: "boolean";
        };
    };
};
export declare const UserCoreInfoSchema: {
    readonly type: "object";
    readonly properties: {
        readonly FirstName: {
            readonly type: "string";
        };
        readonly LastName: {
            readonly type: "string";
        };
        readonly Role: {
            readonly type: "string";
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
    };
};
export declare const PartyIdentifierSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IdentifierType: {
            readonly type: "string";
        };
        readonly Identifier: {
            readonly type: "string";
        };
        readonly SchemeID: {
            readonly type: "string";
        };
        readonly Preferred: {
            readonly type: "boolean";
        };
    };
};
export declare const SequenceRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly SequenceType: {
            readonly type: "string";
        };
        readonly Consume: {
            readonly type: "boolean";
        };
    };
};
export declare const RegisterAccountRequestModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Company: {
            readonly $ref: "#/definitions/Party";
        };
        readonly AccountSettings: {
            readonly $ref: "#/definitions/AccountSettings";
        };
        readonly License: {
            readonly $ref: "#/definitions/LicenseConfiguration";
        };
    };
};
export declare const PartySchema: {
    readonly type: "object";
    readonly properties: {
        readonly PartyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly BookYearStart: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Nr: {
            readonly type: "string";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly CommercialName: {
            readonly type: "string";
        };
        readonly Addresses: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PartyAddress";
            };
        };
        readonly Street: {
            readonly type: "string";
        };
        readonly StreetNumber: {
            readonly type: "string";
        };
        readonly Box: {
            readonly type: "string";
        };
        readonly Zipcode: {
            readonly type: "string";
        };
        readonly CostCategoryCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AccountingCostTypeName: {
            readonly type: "string";
        };
        readonly City: {
            readonly type: "string";
        };
        readonly CountryCode: {
            readonly type: "string";
        };
        readonly IBAN: {
            readonly type: "string";
        };
        readonly BIC: {
            readonly type: "string";
        };
        readonly Mobile: {
            readonly type: "string";
        };
        readonly Phone: {
            readonly type: "string";
        };
        readonly Fax: {
            readonly type: "string";
        };
        readonly Email: {
            readonly type: "string";
        };
        readonly Website: {
            readonly type: "string";
        };
        readonly Contact: {
            readonly type: "string";
        };
        readonly ContactFirstName: {
            readonly type: "string";
        };
        readonly ContactLastName: {
            readonly type: "string";
        };
        readonly VATNumber: {
            readonly type: "string";
        };
        readonly PeppolIdentifier: {
            readonly type: "string";
        };
        readonly RPR: {
            readonly type: "string";
        };
        readonly LastModified: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Created: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly PartyType: {
            readonly enum: readonly ["Customer", "Supplier"];
            readonly type: "string";
        };
        readonly VATLiable: {
            readonly type: "boolean";
        };
        readonly AccountantCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly GLAccountCode: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly Language: {
            readonly type: "string";
        };
        readonly VentilationCode: {
            readonly type: "string";
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
        readonly ExternalProviderTC: {
            readonly type: "string";
        };
        readonly CustomFields: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/MutableKeyValuePair_StringString";
            };
        };
        readonly BankAccounts: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/BankAccount";
            };
        };
        readonly Users: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/UserCoreInfo";
            };
        };
        readonly DefaultPaymentMethodTC: {
            readonly type: "string";
        };
        readonly DomiciliationMandateID: {
            readonly type: "string";
        };
        readonly DomiciliationMandateSigningDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly DefaultPaid: {
            readonly type: "boolean";
        };
        readonly DisplayName: {
            readonly type: "string";
        };
        readonly DefaultTransportTypeTC: {
            readonly type: "string";
        };
        readonly FinancialReductionPercentageDefault: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly FinancialReductionDaysDefault: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly DefaultExpiryOffset: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly GLDefaultExpiryOffset: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly Role: {
            readonly type: "string";
        };
        readonly InternalInfo: {
            readonly type: "string";
        };
        readonly VATDeductable: {
            readonly type: "boolean";
        };
        readonly DefaultReductionPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Identifiers: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PartyIdentifier";
            };
        };
        readonly BookCategoryTC: {
            readonly type: "string";
        };
        readonly SmallEnterprise: {
            readonly type: "boolean";
        };
        readonly AutoSendInvoiceReminders: {
            readonly type: "boolean";
        };
        readonly DefaultCurrencyTC: {
            readonly type: "string";
        };
        readonly Regime: {
            readonly type: "string";
        };
        readonly SubRegime: {
            readonly type: "string";
        };
        readonly IsHighRisk: {
            readonly type: "boolean";
        };
        readonly SendUBL: {
            readonly type: "boolean";
        };
        readonly SendPDF: {
            readonly type: "boolean";
        };
    };
};
export declare const AccountSettingsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly BulkInputFastForward: {
            readonly type: "boolean";
        };
        readonly SendPeppolInvoiceReceivedMail: {
            readonly type: "boolean";
        };
        readonly ExternalLicenseID: {
            readonly type: "string";
        };
        readonly BulkInputIncomeUBLFastForward: {
            readonly type: "boolean";
        };
        readonly ProcessUBLPrePaidAmount: {
            readonly type: "boolean";
        };
    };
};
export declare const LicenseConfigurationSchema: {
    readonly type: "object";
    readonly properties: {
        readonly LicenseID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly PeriodID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Addons: {
            readonly $ref: "#/definitions/LicenseAddons";
        };
    };
};
export declare const LicenseAddonsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly AmountOfExtraUsers: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AmountOfExtraDocuments: {
            readonly format: "int32";
            readonly type: "integer";
        };
    };
};
export declare const RegisterAccountResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CompanyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly APIKey: {
            readonly format: "uuid";
            readonly type: "string";
            readonly example: "00000000-0000-0000-0000-000000000000";
        };
        readonly Users: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/UserIdBundle";
            };
        };
        readonly BankAccounts: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/BankAccountState";
            };
        };
    };
};
export declare const UserIdBundleSchema: {
    readonly type: "object";
    readonly properties: {
        readonly UserID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
    };
};
export declare const BankAccountStateSchema: {
    readonly type: "object";
    readonly properties: {
        readonly BankAccountID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly IBAN: {
            readonly type: "string";
        };
        readonly BankAccountName: {
            readonly type: "string";
        };
        readonly Active: {
            readonly type: "boolean";
        };
    };
};
export declare const UpdateLicenseRequestModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CompanyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly License: {
            readonly $ref: "#/definitions/LicenseConfiguration";
        };
    };
};
export declare const AddNewLicenseBillableModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CompanyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AmountOfExtraDocuments: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AmountOfExtraUsers: {
            readonly format: "int32";
            readonly type: "integer";
        };
    };
};
export declare const FeedSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Name: {
            readonly type: "string";
        };
    };
};
export declare const FeedItemSchema: {
    readonly type: "object";
    readonly properties: {
        readonly FeedItemID: {
            readonly format: "int32";
            readonly description: "The ID of the feeditem itself. Use this ID to confirm that the feed was succesfully processed";
            readonly type: "integer";
        };
        readonly EntityID: {
            readonly format: "int32";
            readonly description: "The ID of the order or the ID of the document. Use this ID in the Order or Document API to fetch the data";
            readonly type: "integer";
        };
        readonly EntityType: {
            readonly description: "Order or Document";
            readonly type: "string";
        };
        readonly PartyID: {
            readonly format: "int32";
            readonly description: "The ID of the company that uploaded the document. Use this ID in the contextPartyID header when downloading the order or document";
            readonly type: "integer";
        };
    };
};
export declare const ConfirmRequestSchema: {
    readonly description: "Optional, For logging purpose";
    readonly type: "object";
    readonly properties: {
        readonly RemoteServerName: {
            readonly type: "string";
        };
        readonly RemotePath: {
            readonly type: "string";
        };
    };
};
export declare const FileDetailsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly FileName: {
            readonly type: "string";
        };
        readonly FileContent: {
            readonly format: "byte";
            readonly description: "Base64 encoded byte array";
            readonly type: "string";
        };
        readonly FileContentSHA256Hash: {
            readonly description: "SHA256 hash of byte array (not the Base64)";
            readonly type: "string";
        };
    };
};
export declare const CashbookInitializationSchema: {
    readonly type: "object";
    readonly properties: {
        readonly StartDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly StartBalance: {
            readonly format: "double";
            readonly type: "number";
        };
    };
};
export declare const CashbookModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CashbookID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly CreationDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Saldo: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly LastEntryDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Currency: {
            readonly type: "string";
        };
    };
};
export declare const ODataQueryOptions_CashbookEntrySchema: {
    readonly type: "object";
    readonly properties: {
        readonly IfMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly IfNoneMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly Request: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly RawValues: {
            readonly $ref: "#/definitions/ODataRawQueryOptions";
            readonly readOnly: true;
        };
        readonly SelectExpand: {
            readonly $ref: "#/definitions/SelectExpandQueryOption";
            readonly readOnly: true;
        };
        readonly Filter: {
            readonly $ref: "#/definitions/FilterQueryOption";
            readonly readOnly: true;
        };
        readonly OrderBy: {
            readonly $ref: "#/definitions/OrderByQueryOption";
            readonly readOnly: true;
        };
        readonly Skip: {
            readonly $ref: "#/definitions/SkipQueryOption";
            readonly readOnly: true;
        };
        readonly Top: {
            readonly $ref: "#/definitions/TopQueryOption";
            readonly readOnly: true;
        };
        readonly InlineCount: {
            readonly $ref: "#/definitions/InlineCountQueryOption";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/ODataQueryValidator";
        };
    };
};
export declare const ODataQueryContextSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Model: {
            readonly $ref: "#/definitions/IEdmModel";
            readonly readOnly: true;
        };
        readonly ElementType: {
            readonly $ref: "#/definitions/IEdmType";
            readonly readOnly: true;
        };
        readonly ElementClrType: {
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const ODataRawQueryOptionsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Filter: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly OrderBy: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Top: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Skip: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Select: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Expand: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly InlineCount: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Format: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly SkipToken: {
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const SelectExpandQueryOptionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly RawSelect: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly RawExpand: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/SelectExpandQueryValidator";
        };
        readonly SelectExpandClause: {
            readonly $ref: "#/definitions/SelectExpandClause";
            readonly readOnly: true;
        };
    };
};
export declare const FilterQueryOptionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/FilterQueryValidator";
        };
        readonly FilterClause: {
            readonly $ref: "#/definitions/FilterClause";
            readonly readOnly: true;
        };
        readonly RawValue: {
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const OrderByQueryOptionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly OrderByNodes: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/OrderByNode";
            };
            readonly readOnly: true;
        };
        readonly RawValue: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/OrderByQueryValidator";
        };
        readonly OrderByClause: {
            readonly $ref: "#/definitions/OrderByClause";
            readonly readOnly: true;
        };
    };
};
export declare const SkipQueryOptionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly RawValue: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Value: {
            readonly format: "int32";
            readonly type: "integer";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/SkipQueryValidator";
        };
    };
};
export declare const TopQueryOptionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly RawValue: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Value: {
            readonly format: "int32";
            readonly type: "integer";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/TopQueryValidator";
        };
    };
};
export declare const InlineCountQueryOptionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly RawValue: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Value: {
            readonly enum: readonly ["None", "AllPages"];
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const ODataQueryValidatorSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const IEdmModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly SchemaElements: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/IEdmSchemaElement";
            };
            readonly readOnly: true;
        };
        readonly VocabularyAnnotations: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/IEdmVocabularyAnnotation";
            };
            readonly readOnly: true;
        };
        readonly ReferencedModels: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/IEdmModel";
            };
            readonly readOnly: true;
        };
        readonly DirectValueAnnotationsManager: {
            readonly $ref: "#/definitions/IEdmDirectValueAnnotationsManager";
            readonly readOnly: true;
        };
    };
};
export declare const IEdmTypeSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TypeKind: {
            readonly enum: readonly ["None", "Primitive", "Entity", "Complex", "Row", "Collection", "EntityReference", "Enum"];
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const SelectExpandQueryValidatorSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const SelectExpandClauseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly SelectedItems: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/SelectItem";
            };
            readonly readOnly: true;
        };
        readonly AllSelected: {
            readonly type: "boolean";
            readonly readOnly: true;
        };
    };
};
export declare const FilterQueryValidatorSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const FilterClauseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Expression: {
            readonly $ref: "#/definitions/SingleValueNode";
            readonly readOnly: true;
        };
        readonly RangeVariable: {
            readonly $ref: "#/definitions/RangeVariable";
            readonly readOnly: true;
        };
        readonly ItemType: {
            readonly $ref: "#/definitions/IEdmTypeReference";
            readonly readOnly: true;
        };
    };
};
export declare const OrderByNodeSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Direction: {
            readonly enum: readonly ["Ascending", "Descending"];
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const OrderByQueryValidatorSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const OrderByClauseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ThenBy: {
            readonly $ref: "#/definitions/OrderByClause";
            readonly readOnly: true;
        };
        readonly Expression: {
            readonly $ref: "#/definitions/SingleValueNode";
            readonly readOnly: true;
        };
        readonly Direction: {
            readonly enum: readonly ["Ascending", "Descending"];
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly RangeVariable: {
            readonly $ref: "#/definitions/RangeVariable";
            readonly readOnly: true;
        };
        readonly ItemType: {
            readonly $ref: "#/definitions/IEdmTypeReference";
            readonly readOnly: true;
        };
    };
};
export declare const SkipQueryValidatorSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const TopQueryValidatorSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const IEdmSchemaElementSchema: {
    readonly type: "object";
    readonly properties: {
        readonly SchemaElementKind: {
            readonly enum: readonly ["None", "TypeDefinition", "Function", "ValueTerm", "EntityContainer"];
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Namespace: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Name: {
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const IEdmVocabularyAnnotationSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Qualifier: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Term: {
            readonly $ref: "#/definitions/IEdmTerm";
            readonly readOnly: true;
        };
        readonly Target: {
            readonly $ref: "#/definitions/IEdmVocabularyAnnotatable";
            readonly readOnly: true;
        };
    };
};
export declare const IEdmDirectValueAnnotationsManagerSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const SelectItemSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const SingleValueNodeSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TypeReference: {
            readonly $ref: "#/definitions/IEdmTypeReference";
            readonly readOnly: true;
        };
        readonly Kind: {
            readonly enum: readonly ["None", "Constant", "Convert", "NonentityRangeVariableReference", "BinaryOperator", "UnaryOperator", "SingleValuePropertyAccess", "CollectionPropertyAccess", "SingleValueFunctionCall", "Any", "CollectionNavigationNode", "SingleNavigationNode", "SingleValueOpenPropertyAccess", "SingleEntityCast", "All", "EntityCollectionCast", "EntityRangeVariableReference", "SingleEntityFunctionCall", "CollectionFunctionCall", "EntityCollectionFunctionCall", "NamedFunctionParameter"];
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const RangeVariableSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Name: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly TypeReference: {
            readonly $ref: "#/definitions/IEdmTypeReference";
            readonly readOnly: true;
        };
        readonly Kind: {
            readonly format: "int32";
            readonly type: "integer";
            readonly readOnly: true;
        };
    };
};
export declare const IEdmTypeReferenceSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IsNullable: {
            readonly type: "boolean";
            readonly readOnly: true;
        };
        readonly Definition: {
            readonly $ref: "#/definitions/IEdmType";
            readonly readOnly: true;
        };
    };
};
export declare const IEdmTermSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TermKind: {
            readonly enum: readonly ["None", "Type", "Value"];
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly SchemaElementKind: {
            readonly enum: readonly ["None", "TypeDefinition", "Function", "ValueTerm", "EntityContainer"];
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Namespace: {
            readonly type: "string";
            readonly readOnly: true;
        };
        readonly Name: {
            readonly type: "string";
            readonly readOnly: true;
        };
    };
};
export declare const IEdmVocabularyAnnotatableSchema: {
    readonly type: "object";
    readonly properties: {};
};
export declare const PageResult_CashbookEntrySchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/CashbookEntry";
            };
        };
        readonly NextPageLink: {
            readonly type: "string";
        };
        readonly Count: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
};
export declare const CashbookEntrySchema: {
    readonly type: "object";
    readonly properties: {
        readonly TransactionDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly EntryType: {
            readonly type: "string";
        };
        readonly Note: {
            readonly type: "string";
        };
        readonly InternalInformation: {
            readonly type: "string";
        };
        readonly Direction: {
            readonly type: "string";
        };
        readonly Amount: {
            readonly format: "double";
            readonly type: "number";
        };
    };
};
export declare const DailyReceiptBookEntryModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Description: {
            readonly type: "string";
        };
        readonly VATPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly InputDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly VentilationCodeTC: {
            readonly type: "string";
        };
    };
};
export declare const PostDailyReceiptBookEntryResponseModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CashbookId: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CashbookEntryId: {
            readonly format: "int32";
            readonly type: "integer";
        };
    };
};
export declare const GetDailyReceiptEntryResponseModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CashbookEntryID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CashbookID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly VAT: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly Orderid: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly TotalIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalExcl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalVAT: {
            readonly format: "double";
            readonly type: "number";
        };
    };
};
export declare const DailyReceiptBookModelResponseModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Cashbooks: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Cashbook";
            };
        };
        readonly CashbookEntries: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/GetDailyReceiptEntryResponseModel";
            };
        };
    };
};
export declare const CashbookSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CashbookID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly FromDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Closed: {
            readonly type: "boolean";
        };
    };
};
export declare const DocumentSchema: {
    readonly type: "object";
    readonly properties: {
        readonly DocumentID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CompanyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly File: {
            readonly $ref: "#/definitions/File";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly DocumentDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly CreationDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Tags: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
export declare const FileSchema: {
    readonly type: "object";
    readonly properties: {
        readonly FileID: {
            readonly format: "uuid";
            readonly type: "string";
            readonly example: "00000000-0000-0000-0000-000000000000";
        };
        readonly FileName: {
            readonly type: "string";
        };
        readonly MimeType: {
            readonly type: "string";
        };
        readonly FileContent: {
            readonly format: "byte";
            readonly type: "string";
        };
    };
};
export declare const ODataQueryOptions_DocumentAPIViewSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IfMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly IfNoneMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly Request: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly RawValues: {
            readonly $ref: "#/definitions/ODataRawQueryOptions";
            readonly readOnly: true;
        };
        readonly SelectExpand: {
            readonly $ref: "#/definitions/SelectExpandQueryOption";
            readonly readOnly: true;
        };
        readonly Filter: {
            readonly $ref: "#/definitions/FilterQueryOption";
            readonly readOnly: true;
        };
        readonly OrderBy: {
            readonly $ref: "#/definitions/OrderByQueryOption";
            readonly readOnly: true;
        };
        readonly Skip: {
            readonly $ref: "#/definitions/SkipQueryOption";
            readonly readOnly: true;
        };
        readonly Top: {
            readonly $ref: "#/definitions/TopQueryOption";
            readonly readOnly: true;
        };
        readonly InlineCount: {
            readonly $ref: "#/definitions/InlineCountQueryOption";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/ODataQueryValidator";
        };
    };
};
export declare const PageResult_DocumentAPIViewSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/DocumentAPIView";
            };
        };
        readonly NextPageLink: {
            readonly type: "string";
        };
        readonly Count: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
};
export declare const DocumentAPIViewSchema: {
    readonly type: "object";
    readonly properties: {
        readonly DocumentID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CompanyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly File: {
            readonly $ref: "#/definitions/File";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly DocumentDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly CreationDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Tags: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
export declare const EinvoiceRegistrationPostSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TaxIdentifier: {
            readonly type: "string";
        };
        readonly CompanyName: {
            readonly type: "string";
        };
        readonly CommercialName: {
            readonly type: "string";
        };
        readonly Addresses: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PartyAddress";
            };
        };
        readonly TaxDeductable: {
            readonly type: "boolean";
        };
        readonly TaxLiable: {
            readonly type: "boolean";
        };
        readonly IBAN: {
            readonly type: "string";
        };
        readonly BIC: {
            readonly type: "string";
        };
        readonly Mobile: {
            readonly type: "string";
        };
        readonly Phone: {
            readonly type: "string";
        };
        readonly Email: {
            readonly type: "string";
        };
        readonly ContactFirstName: {
            readonly type: "string";
        };
        readonly ContactLastName: {
            readonly type: "string";
        };
        readonly Language: {
            readonly type: "string";
        };
        readonly Identifiers: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PartyIdentifier";
            };
        };
        readonly AccountSettings: {
            readonly $ref: "#/definitions/EinvoiceAccountSettings";
        };
    };
};
export declare const EinvoiceAccountSettingsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ProcessUBLPrePaidAmount: {
            readonly type: "boolean";
        };
    };
};
export declare const AccountRegistrationResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly RegistrationID: {
            readonly format: "int32";
            readonly type: "integer";
        };
    };
};
export declare const GetEinvoiceAccountsReponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Companies: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/EinvoiceRegistrationsAccount";
            };
        };
    };
};
export declare const EinvoiceRegistrationsAccountSchema: {
    readonly type: "object";
    readonly properties: {
        readonly RegistrationID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CompanyDetails: {
            readonly $ref: "#/definitions/EinvoiceRegistrationPost";
        };
        readonly Integrations: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/EinvoiceIntegration";
            };
        };
    };
};
export declare const EinvoiceIntegrationSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IntegrationID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Integration: {
            readonly type: "string";
        };
        readonly IntegrationStatus: {
            readonly type: "string";
        };
        readonly IntegrationStatusDescription: {
            readonly type: "string";
        };
        readonly IntegrationDocumentToSign: {
            readonly type: "string";
        };
    };
};
export declare const IntegrationPostSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Externalprovider: {
            readonly type: "string";
        };
        readonly Credentials: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
        readonly Certificates: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly $ref: "#/definitions/File";
            };
        };
    };
};
export declare const CreateAndSendEDocumentPostSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TransportType: {
            readonly type: "string";
        };
        readonly Order: {
            readonly $ref: "#/definitions/Order";
        };
    };
};
export declare const OrderSchema: {
    readonly type: "object";
    readonly properties: {
        readonly OrderID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CompanyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly OrderPDF: {
            readonly $ref: "#/definitions/File";
        };
        readonly Attachments: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/File";
            };
        };
        readonly OrderNumber: {
            readonly type: "string";
        };
        readonly CustomerID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly SupplierID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CounterPartyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Customer: {
            readonly $ref: "#/definitions/Party";
        };
        readonly Supplier: {
            readonly $ref: "#/definitions/Party";
        };
        readonly CounterParty: {
            readonly $ref: "#/definitions/Party";
        };
        readonly OrderDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly ExpiryDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly OrderType: {
            readonly type: "string";
        };
        readonly LastModified: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Created: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly OrderDirection: {
            readonly type: "string";
        };
        readonly OrderLines: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/OrderLine";
            };
        };
        readonly BookingEntries: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/BookingEntry";
            };
        };
        readonly Journal: {
            readonly type: "string";
        };
        readonly OrderTitle: {
            readonly type: "string";
        };
        readonly PaymentDiscountPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly PaymentDiscountAmount: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly PaymentReductionDays: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly PaymentDiscountDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly VatGroups: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/VatGroup";
            };
        };
        readonly VentilationCode: {
            readonly type: "string";
        };
        readonly TotalExcl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalVAT: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Reference: {
            readonly type: "string";
        };
        readonly Tags: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly DepartmentID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly PaymentReference: {
            readonly type: "string";
        };
        readonly AboutInvoiceNumber: {
            readonly type: "string";
        };
        readonly OCRRawText: {
            readonly type: "string";
        };
        readonly OCRMetaPages: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/OCRPage";
            };
        };
        readonly Paid: {
            readonly type: "boolean";
        };
        readonly PaidDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
        readonly ExternalProvider: {
            readonly type: "string";
        };
        readonly ProjectID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly ProjectName: {
            readonly type: "string";
        };
        readonly ExternalProviderReferences: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/ExternalProviderReference";
            };
        };
        readonly Comments: {
            readonly type: "string";
        };
        readonly Currency: {
            readonly type: "string";
        };
        readonly VatDeduction: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly MixedUseProfessionalPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly InternalInfo: {
            readonly type: "string";
        };
        readonly IsSent: {
            readonly type: "boolean";
        };
        readonly Invoiced: {
            readonly type: "boolean";
        };
        readonly CustomFields: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
        readonly PeriodFrom: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly PeriodTill: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly CostCategoryCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AccountCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AccountingCostTypeTC: {
            readonly type: "string";
        };
        readonly LastReminder: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly RemindersSent: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly ToPay: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly OrderStatus: {
            readonly type: "string";
        };
        readonly ApprovalStatus: {
            readonly type: "string";
        };
        readonly Overdue: {
            readonly type: "boolean";
        };
        readonly DaysOverdue: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly FXRateToForeign: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly PaymentMethod: {
            readonly type: "string";
        };
        readonly DeliveryDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly ExportedToConnector: {
            readonly type: "boolean";
        };
        readonly PaymentLinks: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PaymentLink";
            };
        };
        readonly TemplateID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly MessageTemplateID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AnalyticCostBearer: {
            readonly type: "string";
        };
        readonly AnalyticCostCenter: {
            readonly type: "string";
        };
        readonly AccountantVerificationNeeded: {
            readonly type: "boolean";
        };
        readonly CurrentDocumentDeliveryDetails: {
            readonly $ref: "#/definitions/DocumentDeliveryDetails";
        };
        readonly Messages: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/OrderMessage";
            };
        };
        readonly AdditionalDocumentReference: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/AdditionalDocuments";
            };
        };
        readonly PaymentTerms: {
            readonly type: "string";
        };
        readonly ContractDocumentReference: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/ContractDocumentReference";
            };
        };
        readonly TaxPointDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly CategoryFieldItems: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/CategoryFieldItem";
            };
        };
        readonly Signature: {
            readonly $ref: "#/definitions/EInvoiceSignatureModel";
        };
    };
};
export declare const OrderLineSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Quantity: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly UnitPriceExcl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly AccountCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Reference: {
            readonly type: "string";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly TotalExcl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalVAT: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly VATPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly VentilationCode: {
            readonly type: "string";
        };
        readonly ProductID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Unit: {
            readonly type: "string";
        };
        readonly CustomFields: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
        readonly ExternalProviderReferences: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/ExternalProviderReference";
            };
        };
        readonly InclLeading: {
            readonly type: "boolean";
        };
        readonly UnitPriceIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly AnalyticCostBearer: {
            readonly type: "string";
        };
        readonly AnalyticCostCenter: {
            readonly type: "string";
        };
        readonly ReductionPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly DescriptionExtended: {
            readonly type: "string";
        };
    };
};
export declare const BookingEntrySchema: {
    readonly type: "object";
    readonly properties: {
        readonly BookingEntryID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly OrderID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly AccountCode: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Amount: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly DebetOrCredit: {
            readonly type: "string";
        };
        readonly VAT1: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly VAT2: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly VAT3: {
            readonly format: "int32";
            readonly type: "integer";
        };
    };
};
export declare const VatGroupSchema: {
    readonly type: "object";
    readonly properties: {
        readonly VentilationCode: {
            readonly type: "string";
        };
        readonly VATPercentage: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalExcl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalVAT: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TotalIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Mtvh: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly FinancialReductionAmount: {
            readonly format: "double";
            readonly type: "number";
        };
    };
};
export declare const OCRPageSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TextList: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/OCRText";
            };
        };
    };
};
export declare const ExternalProviderReferenceSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ExternalProvider: {
            readonly type: "string";
        };
        readonly Category: {
            readonly type: "string";
        };
        readonly Value: {
            readonly type: "string";
        };
        readonly EntityType: {
            readonly type: "string";
        };
        readonly EntityID: {
            readonly format: "int32";
            readonly type: "integer";
        };
    };
};
export declare const PaymentLinkSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ExternalProvider: {
            readonly type: "string";
        };
        readonly ClickUrl: {
            readonly type: "string";
        };
        readonly QRImageUrl: {
            readonly type: "string";
        };
    };
};
export declare const DocumentDeliveryDetailsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly DocumentRefusedDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly DocumentDeliveryDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly DocumentDeliveryInfo: {
            readonly type: "string";
        };
        readonly DocumentRefusedReasonTC: {
            readonly type: "string";
        };
        readonly DocumentRefusedInfo: {
            readonly type: "string";
        };
        readonly IsDocumentDelivered: {
            readonly type: "boolean";
        };
        readonly DocumentDeliveryStatus: {
            readonly type: "string";
        };
    };
};
export declare const OrderMessageSchema: {
    readonly type: "object";
    readonly properties: {
        readonly OrderID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly FileID: {
            readonly format: "uuid";
            readonly type: "string";
            readonly example: "00000000-0000-0000-0000-000000000000";
        };
        readonly CreationDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly TransportType: {
            readonly type: "string";
        };
        readonly Success: {
            readonly type: "boolean";
        };
        readonly Trials: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Destination: {
            readonly type: "string";
        };
        readonly MessageDirection: {
            readonly type: "string";
        };
    };
};
export declare const AdditionalDocumentsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly DocumentDescription: {
            readonly type: "string";
        };
        readonly ID: {
            readonly type: "string";
        };
        readonly DocumentType: {
            readonly type: "string";
        };
        readonly Attachment: {
            readonly $ref: "#/definitions/File";
        };
        readonly CustomFields: {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "string";
            };
        };
    };
};
export declare const ContractDocumentReferenceSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ID: {
            readonly type: "string";
        };
    };
};
export declare const CategoryFieldItemSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Value: {
            readonly type: "string";
        };
        readonly Name: {
            readonly type: "string";
        };
    };
};
export declare const EInvoiceSignatureModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly OrginalString: {
            readonly type: "string";
        };
        readonly NetworkCertificateNumber: {
            readonly type: "string";
        };
        readonly DocumentCertificateNumber: {
            readonly type: "string";
        };
        readonly UUID: {
            readonly type: "string";
        };
        readonly NetworkStamp: {
            readonly type: "string";
        };
        readonly DocumentStamp: {
            readonly type: "string";
        };
        readonly DateTimeInfo: {
            readonly $ref: "#/definitions/TimezoneInfo";
        };
        readonly QRCode: {
            readonly type: "string";
        };
        readonly Cfdi: {
            readonly type: "string";
        };
        readonly StampUrl: {
            readonly type: "string";
        };
    };
};
export declare const OCRTextSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Text: {
            readonly type: "string";
        };
        readonly X: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Y: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Width: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Height: {
            readonly format: "double";
            readonly type: "number";
        };
    };
};
export declare const TimezoneInfoSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TimeZoneInfo: {
            readonly type: "string";
        };
        readonly DateTime: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
};
export declare const CreateAndSendEdocumentResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly OrderID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly TranssportStatus: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly TransportMessages: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Error";
            };
        };
    };
};
export declare const ErrorSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ErrorEnum: {
            readonly type: "string";
        };
        readonly ErrorParams: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
            };
        };
        readonly ErrorMessage: {
            readonly type: "string";
        };
        readonly Append: {
            readonly type: "string";
        };
        readonly DefaultText: {
            readonly type: "string";
        };
    };
};
export declare const ODataQueryOptions_OrderSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IfMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly IfNoneMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly Request: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly RawValues: {
            readonly $ref: "#/definitions/ODataRawQueryOptions";
            readonly readOnly: true;
        };
        readonly SelectExpand: {
            readonly $ref: "#/definitions/SelectExpandQueryOption";
            readonly readOnly: true;
        };
        readonly Filter: {
            readonly $ref: "#/definitions/FilterQueryOption";
            readonly readOnly: true;
        };
        readonly OrderBy: {
            readonly $ref: "#/definitions/OrderByQueryOption";
            readonly readOnly: true;
        };
        readonly Skip: {
            readonly $ref: "#/definitions/SkipQueryOption";
            readonly readOnly: true;
        };
        readonly Top: {
            readonly $ref: "#/definitions/TopQueryOption";
            readonly readOnly: true;
        };
        readonly InlineCount: {
            readonly $ref: "#/definitions/InlineCountQueryOption";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/ODataQueryValidator";
        };
    };
};
export declare const PageResult_OrderSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Order";
            };
        };
        readonly NextPageLink: {
            readonly type: "string";
        };
        readonly Count: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
};
export declare const WebhookSchema: {
    readonly type: "object";
    readonly properties: {
        readonly WebhookID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly CompanyID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly UserID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly EntityType: {
            readonly type: "string";
        };
        readonly EntityUpdateType: {
            readonly type: "string";
        };
        readonly WebhookURL: {
            readonly type: "string";
        };
        readonly Secret: {
            readonly type: "string";
        };
    };
};
export declare const KYCInitiationPostSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IdentificationProviderTC: {
            readonly type: "string";
        };
        readonly RedirectURL: {
            readonly type: "string";
        };
    };
};
export declare const KYCInitiationResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly URL: {
            readonly type: "string";
        };
    };
};
export declare const TransactionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly BankAccountTransactionID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly BankName: {
            readonly type: "string";
        };
        readonly IBAN: {
            readonly type: "string";
        };
        readonly BIC: {
            readonly type: "string";
        };
        readonly BankAccountID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly DocumentId: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly IBANCounterParty: {
            readonly type: "string";
        };
        readonly BICCounterParty: {
            readonly type: "string";
        };
        readonly NameCounterParty: {
            readonly type: "string";
        };
        readonly TotalAmount: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly TransactionType: {
            readonly type: "string";
        };
        readonly ValueDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly Currency: {
            readonly type: "string";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly ExternalProviderID: {
            readonly type: "string";
        };
        readonly ExternalProviderTC: {
            readonly type: "string";
        };
        readonly FreeMessage: {
            readonly type: "string";
        };
        readonly CodaSource: {
            readonly type: "string";
        };
        readonly CodaFileID: {
            readonly format: "uuid";
            readonly type: "string";
            readonly example: "00000000-0000-0000-0000-000000000000";
        };
        readonly BankReference: {
            readonly type: "string";
        };
        readonly ClientReference: {
            readonly type: "string";
        };
        readonly Note: {
            readonly type: "string";
        };
        readonly AssignedEntities: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/AssignedEntity";
            };
        };
        readonly ProprietaryBankTransactionCode: {
            readonly type: "string";
        };
        readonly BankTransactionCode: {
            readonly type: "string";
        };
    };
};
export declare const AssignedEntitySchema: {
    readonly type: "object";
    readonly properties: {
        readonly AssignedAmount: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly FXRateToBankCurrency: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly EntityType: {
            readonly type: "string";
        };
        readonly EntityID: {
            readonly format: "int32";
            readonly type: "integer";
        };
    };
};
export declare const ODataQueryOptions_TransactionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IfMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly IfNoneMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly Request: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly RawValues: {
            readonly $ref: "#/definitions/ODataRawQueryOptions";
            readonly readOnly: true;
        };
        readonly SelectExpand: {
            readonly $ref: "#/definitions/SelectExpandQueryOption";
            readonly readOnly: true;
        };
        readonly Filter: {
            readonly $ref: "#/definitions/FilterQueryOption";
            readonly readOnly: true;
        };
        readonly OrderBy: {
            readonly $ref: "#/definitions/OrderByQueryOption";
            readonly readOnly: true;
        };
        readonly Skip: {
            readonly $ref: "#/definitions/SkipQueryOption";
            readonly readOnly: true;
        };
        readonly Top: {
            readonly $ref: "#/definitions/TopQueryOption";
            readonly readOnly: true;
        };
        readonly InlineCount: {
            readonly $ref: "#/definitions/InlineCountQueryOption";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/ODataQueryValidator";
        };
    };
};
export declare const PageResult_TransactionSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Transaction";
            };
        };
        readonly NextPageLink: {
            readonly type: "string";
        };
        readonly Count: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
};
export declare const GLAccountSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Code: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly GLAccountType: {
            readonly type: "string";
        };
    };
};
export declare const JournalSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Code: {
            readonly type: "string";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly JournalType: {
            readonly enum: readonly ["Income", "Cost"];
            readonly type: "string";
        };
    };
};
export declare const CompanySearchResultSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/CompanySearchResultItem";
            };
        };
    };
};
export declare const CompanySearchResultItemSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Source: {
            readonly description: "Either KBO or VIES";
            readonly type: "string";
        };
        readonly CompanyIdentification: {
            readonly type: "string";
        };
        readonly Street: {
            readonly type: "string";
        };
        readonly Number: {
            readonly type: "string";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly Zipcode: {
            readonly type: "string";
        };
        readonly City: {
            readonly type: "string";
        };
        readonly Box: {
            readonly type: "string";
        };
        readonly Country: {
            readonly type: "string";
        };
        readonly StartDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly CommercialName: {
            readonly type: "string";
        };
    };
};
export declare const TypeCodeResultSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/TypeCodeResultItem";
            };
        };
    };
};
export declare const TypeCodeResultItemSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Key: {
            readonly type: "string";
        };
        readonly Value: {
            readonly type: "string";
        };
    };
};
export declare const OAuthAccessTokenRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly client_id: {
            readonly type: "string";
        };
        readonly client_secret: {
            readonly type: "string";
        };
        readonly code: {
            readonly type: "string";
        };
        readonly grant_type: {
            readonly type: "string";
        };
        readonly redirect_uri: {
            readonly type: "string";
        };
        readonly refresh_token: {
            readonly type: "string";
        };
        readonly state: {
            readonly type: "string";
        };
    };
};
export declare const PostPaymentRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Amount: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly Date: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
};
export declare const SendRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly OrderIds: {
            readonly type: "array";
            readonly items: {
                readonly format: "int32";
                readonly type: "integer";
            };
        };
        readonly TransportType: {
            readonly type: "string";
        };
        readonly PrintType: {
            readonly type: "string";
        };
    };
};
export declare const ODataQueryOptions_PartySchema: {
    readonly type: "object";
    readonly properties: {
        readonly IfMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly IfNoneMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly Request: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly RawValues: {
            readonly $ref: "#/definitions/ODataRawQueryOptions";
            readonly readOnly: true;
        };
        readonly SelectExpand: {
            readonly $ref: "#/definitions/SelectExpandQueryOption";
            readonly readOnly: true;
        };
        readonly Filter: {
            readonly $ref: "#/definitions/FilterQueryOption";
            readonly readOnly: true;
        };
        readonly OrderBy: {
            readonly $ref: "#/definitions/OrderByQueryOption";
            readonly readOnly: true;
        };
        readonly Skip: {
            readonly $ref: "#/definitions/SkipQueryOption";
            readonly readOnly: true;
        };
        readonly Top: {
            readonly $ref: "#/definitions/TopQueryOption";
            readonly readOnly: true;
        };
        readonly InlineCount: {
            readonly $ref: "#/definitions/InlineCountQueryOption";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/ODataQueryValidator";
        };
    };
};
export declare const PageResult_PartySchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Party";
            };
        };
        readonly NextPageLink: {
            readonly type: "string";
        };
        readonly Count: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
};
export declare const RegisterParticipantRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CompanyID: {
            readonly type: "string";
        };
    };
};
export declare const DeleteParticipantRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly CompanyID: {
            readonly type: "string";
        };
    };
};
export declare const InboxGetResultSchema: {
    readonly type: "object";
    readonly properties: {
        readonly InboxItems: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/InboxGetResultItem";
            };
        };
    };
};
export declare const InboxGetResultItemSchema: {
    readonly type: "object";
    readonly properties: {
        readonly InboxItemID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly SenderPeppolID: {
            readonly type: "string";
        };
        readonly PeppolDocumentType: {
            readonly type: "string";
        };
        readonly ReceiverPeppolID: {
            readonly type: "string";
        };
        readonly SenderCompanyID: {
            readonly type: "string";
        };
        readonly ReceiverCompanyID: {
            readonly type: "string";
        };
        readonly CreationDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly PeppolFileID: {
            readonly format: "uuid";
            readonly type: "string";
            readonly example: "00000000-0000-0000-0000-000000000000";
        };
    };
};
export declare const RefusePeppolItemRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly RefusalReason: {
            readonly type: "string";
        };
    };
};
export declare const ParticipantInformationResponseSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Registered: {
            readonly type: "boolean";
        };
        readonly Identifier: {
            readonly type: "string";
        };
        readonly DocumentTypes: {
            readonly type: "array";
            readonly items: {
                readonly enum: readonly ["Invoice4", "Invoice5", "CreditNote5", "MLR", "MLRBISV3", "MLRBISV2", "IMR", "EFFF", "BISv3Invoice", "BISv3CreditNote", "BISv3OrderForm", "BISv3AUNZInvoice", "BISv3AUNZCreditNote", "XRechnung22Invoice", "XRechnung22CreditNote", "SIInvoice", "SICreditNote", "UBLBEInvoice", "UBLBECreditNote", "CII", "PTCIUSInvoice", "PTCIUSCreditNote", "BISv3SGInvoice", "BISv3SGCreditNote", "ROCIUSInvoice", "ROCIUSCreditNote", "XRechnung3Invoice", "XRechnung3CreditNote", "EndUserStatistics", "TransactionStatistics", "MYPintInvoice", "MYPintCreditNote", "MYPintInvoiceWildCard", "MYPintCreditNoteWildCard", "PintInvoiceWildCard", "PintCreditNoteWildCard", "AUNZPintInvoice", "AUNZPintCreditNote", "FACeCIUSInvoice", "FACeCIUSCreditNote", "PintBillingWildCard"];
                readonly type: "string";
            };
        };
        readonly ServiceDetails: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/ServiceDetail";
            };
        };
        readonly ServiceProviderID: {
            readonly type: "string";
        };
    };
};
export declare const ServiceDetailSchema: {
    readonly type: "object";
    readonly properties: {
        readonly DocumentIdentifier: {
            readonly type: "string";
        };
        readonly DocumentIdentifierScheme: {
            readonly type: "string";
        };
        readonly Processes: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/ProcessInfo";
            };
        };
    };
};
export declare const ProcessInfoSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ProcessIdentifier: {
            readonly type: "string";
        };
        readonly ProcessIdentifierScheme: {
            readonly type: "string";
        };
        readonly Endpoints: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Endpoint";
            };
        };
    };
};
export declare const EndpointSchema: {
    readonly type: "object";
    readonly properties: {
        readonly EndpointURL: {
            readonly type: "string";
        };
        readonly TransportProfile: {
            readonly type: "string";
        };
        readonly Certificate: {
            readonly type: "string";
        };
    };
};
export declare const ProductSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ProductID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Reference: {
            readonly type: "string";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly AmountExcl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly VAT: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly Unit: {
            readonly type: "string";
        };
        readonly GroupID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly GroupName: {
            readonly type: "string";
        };
        readonly AmountIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly StockQuantity: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly MinimumBilledQuantity: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly BuyExcl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly InternalInformation: {
            readonly type: "string";
        };
        readonly Created: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly LastModified: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly EAN: {
            readonly type: "string";
        };
        readonly GTIN: {
            readonly type: "string";
        };
        readonly GLN: {
            readonly type: "string";
        };
        readonly ExternalProviderTC: {
            readonly type: "string";
        };
        readonly ChildProducts: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Product";
            };
        };
    };
};
export declare const ODataQueryOptions_ProductSchema: {
    readonly type: "object";
    readonly properties: {
        readonly IfMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly IfNoneMatch: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly Context: {
            readonly $ref: "#/definitions/ODataQueryContext";
            readonly readOnly: true;
        };
        readonly Request: {
            readonly type: "object";
            readonly readOnly: true;
        };
        readonly RawValues: {
            readonly $ref: "#/definitions/ODataRawQueryOptions";
            readonly readOnly: true;
        };
        readonly SelectExpand: {
            readonly $ref: "#/definitions/SelectExpandQueryOption";
            readonly readOnly: true;
        };
        readonly Filter: {
            readonly $ref: "#/definitions/FilterQueryOption";
            readonly readOnly: true;
        };
        readonly OrderBy: {
            readonly $ref: "#/definitions/OrderByQueryOption";
            readonly readOnly: true;
        };
        readonly Skip: {
            readonly $ref: "#/definitions/SkipQueryOption";
            readonly readOnly: true;
        };
        readonly Top: {
            readonly $ref: "#/definitions/TopQueryOption";
            readonly readOnly: true;
        };
        readonly InlineCount: {
            readonly $ref: "#/definitions/InlineCountQueryOption";
            readonly readOnly: true;
        };
        readonly Validator: {
            readonly $ref: "#/definitions/ODataQueryValidator";
        };
    };
};
export declare const PageResult_ProductSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Items: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/Product";
            };
        };
        readonly NextPageLink: {
            readonly type: "string";
        };
        readonly Count: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
};
export declare const ReportsExportOverViewModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ReportID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly ReportName: {
            readonly type: "string";
        };
    };
};
export declare const ReportDetailModelSchema: {
    readonly type: "object";
    readonly properties: {
        readonly ID: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly Name: {
            readonly type: "string";
        };
        readonly CSVs: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
export declare const ToProcessSaveRequestSchema: {
    readonly type: "object";
    readonly properties: {
        readonly Split: {
            readonly type: "boolean";
        };
        readonly File: {
            readonly $ref: "#/definitions/File";
        };
        readonly FileSource: {
            readonly $ref: "#/definitions/File";
        };
        readonly MetaData: {
            readonly $ref: "#/definitions/UploadMetadata";
            readonly description: "Optional";
        };
    };
};
export declare const UploadMetadataSchema: {
    readonly type: "object";
    readonly properties: {
        readonly TotalIncl: {
            readonly format: "double";
            readonly type: "number";
        };
        readonly CostType: {
            readonly type: "string";
        };
        readonly PaymentMethod: {
            readonly type: "string";
        };
        readonly Description: {
            readonly type: "string";
        };
        readonly CurrencyTC: {
            readonly type: "string";
        };
        readonly OrderDate: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
};
