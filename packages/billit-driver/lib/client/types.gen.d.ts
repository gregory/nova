export type AccountInformation = {
    Email?: string;
    Companies?: Array<AccountInformationParty>;
    UserCompanyRoles?: Array<UserCompanyRole>;
    ExternalProviderID?: string;
    ExternalProviderTC?: string;
    FirstName?: string;
    LastName?: string;
    LoginOrRegisterNeeded?: boolean;
    NationalIdentityNumber?: string;
    CardNumber?: string;
    PhoneNumber?: string;
    UniqueReference?: string;
};
export type AccountInformationParty = {
    TabNameAlias?: string;
    APIAllowed?: boolean;
    LogoFileID?: string;
    APIEnabledFeatures?: ApiEnabledFeatures;
    UserLanguage?: string;
    PartyID?: number;
    BookYearStart?: Date;
    Nr?: string;
    Name?: string;
    CommercialName?: string;
    Addresses?: Array<PartyAddress>;
    Street?: string;
    StreetNumber?: string;
    Box?: string;
    Zipcode?: string;
    CostCategoryCode?: number;
    AccountingCostTypeName?: string;
    City?: string;
    CountryCode?: string;
    IBAN?: string;
    BIC?: string;
    Mobile?: string;
    Phone?: string;
    Fax?: string;
    Email?: string;
    Website?: string;
    Contact?: string;
    ContactFirstName?: string;
    ContactLastName?: string;
    VATNumber?: string;
    PeppolIdentifier?: string;
    RPR?: string;
    LastModified?: Date;
    Created?: Date;
    PartyType?: "Customer" | "Supplier";
    VATLiable?: boolean;
    AccountantCode?: number;
    GLAccountCode?: bigint;
    Language?: string;
    VentilationCode?: string;
    ExternalProviderID?: string;
    ExternalProviderTC?: string;
    CustomFields?: Array<MutableKeyValuePairStringString>;
    BankAccounts?: Array<BankAccount>;
    Users?: Array<UserCoreInfo>;
    DefaultPaymentMethodTC?: string;
    DomiciliationMandateID?: string;
    DomiciliationMandateSigningDate?: Date;
    DefaultPaid?: boolean;
    DisplayName?: string;
    DefaultTransportTypeTC?: string;
    FinancialReductionPercentageDefault?: number;
    FinancialReductionDaysDefault?: number;
    DefaultExpiryOffset?: number;
    GLDefaultExpiryOffset?: bigint;
    Role?: string;
    InternalInfo?: string;
    VATDeductable?: boolean;
    DefaultReductionPercentage?: number;
    Identifiers?: Array<PartyIdentifier>;
    BookCategoryTC?: string;
    SmallEnterprise?: boolean;
    AutoSendInvoiceReminders?: boolean;
    DefaultCurrencyTC?: string;
    Regime?: string;
    SubRegime?: string;
    IsHighRisk?: boolean;
    SendUBL?: boolean;
    SendPDF?: boolean;
};
export type UserCompanyRole = {
    PartyID?: number;
    UserRoleTypes?: Array<string>;
};
export type ApiEnabledFeatures = {
    TimeRegistration?: boolean;
    Projects?: boolean;
    DailyReceipts?: boolean;
    FinancialReduction?: boolean;
    GLAccounts?: boolean;
    Cashbook?: boolean;
};
export type PartyAddress = {
    AddressType?: string;
    Tav?: string;
    Name?: string;
    Street?: string;
    StreetNumber?: string;
    Box?: string;
    Zipcode?: string;
    City?: string;
    CountryCode?: string;
    Phone?: string;
};
export type MutableKeyValuePairStringString = {
    Key?: string;
    Value?: string;
};
export type BankAccount = {
    IBAN?: string;
    BIC?: string;
    Currency?: string;
    Verified?: boolean;
    Name?: string;
    Saldo?: number;
    ExternalProviderID?: string;
    LogoFileID?: string;
    LogoFileUrl?: string;
    CountryCode?: string;
    BankAccountName?: string;
    BankProviderStatus?: string;
    AccountIdentification?: string;
    Active?: boolean;
};
export type UserCoreInfo = {
    FirstName?: string;
    LastName?: string;
    Role?: string;
    ExternalProviderID?: string;
};
export type PartyIdentifier = {
    IdentifierType?: string;
    Identifier?: string;
    SchemeID?: string;
    Preferred?: boolean;
};
export type SequenceRequest = {
    SequenceType?: string;
    Consume?: boolean;
};
export type RegisterAccountRequestModel = {
    Company?: Party;
    AccountSettings?: AccountSettings;
    License?: LicenseConfiguration;
};
export type Party = {
    PartyID?: number;
    BookYearStart?: Date;
    Nr?: string;
    Name?: string;
    CommercialName?: string;
    Addresses?: Array<PartyAddress>;
    Street?: string;
    StreetNumber?: string;
    Box?: string;
    Zipcode?: string;
    CostCategoryCode?: number;
    AccountingCostTypeName?: string;
    City?: string;
    CountryCode?: string;
    IBAN?: string;
    BIC?: string;
    Mobile?: string;
    Phone?: string;
    Fax?: string;
    Email?: string;
    Website?: string;
    Contact?: string;
    ContactFirstName?: string;
    ContactLastName?: string;
    VATNumber?: string;
    PeppolIdentifier?: string;
    RPR?: string;
    LastModified?: Date;
    Created?: Date;
    PartyType?: "Customer" | "Supplier";
    VATLiable?: boolean;
    AccountantCode?: number;
    GLAccountCode?: bigint;
    Language?: string;
    VentilationCode?: string;
    ExternalProviderID?: string;
    ExternalProviderTC?: string;
    CustomFields?: Array<MutableKeyValuePairStringString>;
    BankAccounts?: Array<BankAccount>;
    Users?: Array<UserCoreInfo>;
    DefaultPaymentMethodTC?: string;
    DomiciliationMandateID?: string;
    DomiciliationMandateSigningDate?: Date;
    DefaultPaid?: boolean;
    DisplayName?: string;
    DefaultTransportTypeTC?: string;
    FinancialReductionPercentageDefault?: number;
    FinancialReductionDaysDefault?: number;
    DefaultExpiryOffset?: number;
    GLDefaultExpiryOffset?: bigint;
    Role?: string;
    InternalInfo?: string;
    VATDeductable?: boolean;
    DefaultReductionPercentage?: number;
    Identifiers?: Array<PartyIdentifier>;
    BookCategoryTC?: string;
    SmallEnterprise?: boolean;
    AutoSendInvoiceReminders?: boolean;
    DefaultCurrencyTC?: string;
    Regime?: string;
    SubRegime?: string;
    IsHighRisk?: boolean;
    SendUBL?: boolean;
    SendPDF?: boolean;
};
export type AccountSettings = {
    BulkInputFastForward?: boolean;
    SendPeppolInvoiceReceivedMail?: boolean;
    ExternalLicenseID?: string;
    BulkInputIncomeUBLFastForward?: boolean;
    ProcessUBLPrePaidAmount?: boolean;
};
export type LicenseConfiguration = {
    LicenseID?: number;
    PeriodID?: number;
    Addons?: LicenseAddons;
};
export type LicenseAddons = {
    AmountOfExtraUsers?: number;
    AmountOfExtraDocuments?: number;
};
export type RegisterAccountResponse = {
    CompanyID?: number;
    APIKey?: string;
    Users?: Array<UserIdBundle>;
    BankAccounts?: Array<BankAccountState>;
};
export type UserIdBundle = {
    UserID?: number;
    ExternalProviderID?: string;
};
export type BankAccountState = {
    BankAccountID?: number;
    IBAN?: string;
    BankAccountName?: string;
    Active?: boolean;
};
export type UpdateLicenseRequestModel = {
    CompanyID?: number;
    License?: LicenseConfiguration;
};
export type AddNewLicenseBillableModel = {
    CompanyID?: number;
    AmountOfExtraDocuments?: number;
    AmountOfExtraUsers?: number;
};
export type Feed = {
    Name?: string;
};
export type FeedItem = {
    /**
     * The ID of the feeditem itself. Use this ID to confirm that the feed was succesfully processed
     */
    FeedItemID?: number;
    /**
     * The ID of the order or the ID of the document. Use this ID in the Order or Document API to fetch the data
     */
    EntityID?: number;
    /**
     * Order or Document
     */
    EntityType?: string;
    /**
     * The ID of the company that uploaded the document. Use this ID in the contextPartyID header when downloading the order or document
     */
    PartyID?: number;
};
/**
 * Optional, For logging purpose
 */
export type ConfirmRequest = {
    RemoteServerName?: string;
    RemotePath?: string;
};
export type FileDetails = {
    FileName?: string;
    /**
     * Base64 encoded byte array
     */
    FileContent?: string;
    /**
     * SHA256 hash of byte array (not the Base64)
     */
    FileContentSHA256Hash?: string;
};
export type CashbookInitialization = {
    StartDate?: Date;
    StartBalance?: number;
};
export type CashbookModel = {
    CashbookID?: number;
    Name?: string;
    CreationDate?: Date;
    Saldo?: number;
    LastEntryDate?: Date;
    Currency?: string;
};
export type ODataQueryOptionsCashbookEntry = {
    readonly IfMatch?: {
        [key: string]: unknown;
    };
    readonly IfNoneMatch?: {
        [key: string]: unknown;
    };
    Context?: ODataQueryContext;
    readonly Request?: {
        [key: string]: unknown;
    };
    RawValues?: ODataRawQueryOptions;
    SelectExpand?: SelectExpandQueryOption;
    Filter?: FilterQueryOption;
    OrderBy?: OrderByQueryOption;
    Skip?: SkipQueryOption;
    Top?: TopQueryOption;
    InlineCount?: InlineCountQueryOption;
    Validator?: ODataQueryValidator;
};
export type ODataQueryContext = {
    Model?: IEdmModel;
    ElementType?: IEdmType;
    readonly ElementClrType?: string;
};
export type ODataRawQueryOptions = {
    readonly Filter?: string;
    readonly OrderBy?: string;
    readonly Top?: string;
    readonly Skip?: string;
    readonly Select?: string;
    readonly Expand?: string;
    readonly InlineCount?: string;
    readonly Format?: string;
    readonly SkipToken?: string;
};
export type SelectExpandQueryOption = {
    Context?: ODataQueryContext;
    readonly RawSelect?: string;
    readonly RawExpand?: string;
    Validator?: SelectExpandQueryValidator;
    SelectExpandClause?: SelectExpandClause;
};
export type FilterQueryOption = {
    Context?: ODataQueryContext;
    Validator?: FilterQueryValidator;
    FilterClause?: FilterClause;
    readonly RawValue?: string;
};
export type OrderByQueryOption = {
    Context?: ODataQueryContext;
    readonly OrderByNodes?: Array<OrderByNode>;
    readonly RawValue?: string;
    Validator?: OrderByQueryValidator;
    OrderByClause?: OrderByClause;
};
export type SkipQueryOption = {
    Context?: ODataQueryContext;
    readonly RawValue?: string;
    readonly Value?: number;
    Validator?: SkipQueryValidator;
};
export type TopQueryOption = {
    Context?: ODataQueryContext;
    readonly RawValue?: string;
    readonly Value?: number;
    Validator?: TopQueryValidator;
};
export type InlineCountQueryOption = {
    Context?: ODataQueryContext;
    readonly RawValue?: string;
    Value?: "None" | "AllPages";
};
export type ODataQueryValidator = {
    [key: string]: unknown;
};
export type IEdmModel = {
    readonly SchemaElements?: Array<IEdmSchemaElement>;
    readonly VocabularyAnnotations?: Array<IEdmVocabularyAnnotation>;
    readonly ReferencedModels?: Array<IEdmModel>;
    DirectValueAnnotationsManager?: IEdmDirectValueAnnotationsManager;
};
export type IEdmType = {
    TypeKind?: "None" | "Primitive" | "Entity" | "Complex" | "Row" | "Collection" | "EntityReference" | "Enum";
};
export type SelectExpandQueryValidator = {
    [key: string]: unknown;
};
export type SelectExpandClause = {
    readonly SelectedItems?: Array<SelectItem>;
    readonly AllSelected?: boolean;
};
export type FilterQueryValidator = {
    [key: string]: unknown;
};
export type FilterClause = {
    Expression?: SingleValueNode;
    RangeVariable?: RangeVariable;
    ItemType?: IEdmTypeReference;
};
export type OrderByNode = {
    Direction?: "Ascending" | "Descending";
};
export type OrderByQueryValidator = {
    [key: string]: unknown;
};
export type OrderByClause = {
    ThenBy?: OrderByClause;
    Expression?: SingleValueNode;
    Direction?: "Ascending" | "Descending";
    RangeVariable?: RangeVariable;
    ItemType?: IEdmTypeReference;
};
export type SkipQueryValidator = {
    [key: string]: unknown;
};
export type TopQueryValidator = {
    [key: string]: unknown;
};
export type IEdmSchemaElement = {
    SchemaElementKind?: "None" | "TypeDefinition" | "Function" | "ValueTerm" | "EntityContainer";
    readonly Namespace?: string;
    readonly Name?: string;
};
export type IEdmVocabularyAnnotation = {
    readonly Qualifier?: string;
    Term?: IEdmTerm;
    Target?: IEdmVocabularyAnnotatable;
};
export type IEdmDirectValueAnnotationsManager = {
    [key: string]: unknown;
};
export type SelectItem = {
    [key: string]: unknown;
};
export type SingleValueNode = {
    TypeReference?: IEdmTypeReference;
    Kind?: "None" | "Constant" | "Convert" | "NonentityRangeVariableReference" | "BinaryOperator" | "UnaryOperator" | "SingleValuePropertyAccess" | "CollectionPropertyAccess" | "SingleValueFunctionCall" | "Any" | "CollectionNavigationNode" | "SingleNavigationNode" | "SingleValueOpenPropertyAccess" | "SingleEntityCast" | "All" | "EntityCollectionCast" | "EntityRangeVariableReference" | "SingleEntityFunctionCall" | "CollectionFunctionCall" | "EntityCollectionFunctionCall" | "NamedFunctionParameter";
};
export type RangeVariable = {
    readonly Name?: string;
    TypeReference?: IEdmTypeReference;
    readonly Kind?: number;
};
export type IEdmTypeReference = {
    readonly IsNullable?: boolean;
    Definition?: IEdmType;
};
export type IEdmTerm = {
    TermKind?: "None" | "Type" | "Value";
    SchemaElementKind?: "None" | "TypeDefinition" | "Function" | "ValueTerm" | "EntityContainer";
    readonly Namespace?: string;
    readonly Name?: string;
};
export type IEdmVocabularyAnnotatable = {
    [key: string]: unknown;
};
export type PageResultCashbookEntry = {
    Items?: Array<CashbookEntry>;
    NextPageLink?: string;
    Count?: bigint;
};
export type CashbookEntry = {
    TransactionDate?: Date;
    EntryType?: string;
    Note?: string;
    InternalInformation?: string;
    Direction?: string;
    Amount?: number;
};
export type DailyReceiptBookEntryModel = {
    Description?: string;
    VATPercentage?: number;
    TotalIncl?: number;
    InputDate?: Date;
    VentilationCodeTC?: string;
};
export type PostDailyReceiptBookEntryResponseModel = {
    CashbookId?: number;
    CashbookEntryId?: number;
};
export type GetDailyReceiptEntryResponseModel = {
    CashbookEntryID?: number;
    CashbookID?: number;
    VAT?: number;
    Description?: string;
    Orderid?: number;
    TotalIncl?: number;
    TotalExcl?: number;
    TotalVAT?: number;
};
export type DailyReceiptBookModelResponseModel = {
    Cashbooks?: Array<Cashbook>;
    CashbookEntries?: Array<GetDailyReceiptEntryResponseModel>;
};
export type Cashbook = {
    CashbookID?: number;
    FromDate?: Date;
    Closed?: boolean;
};
export type Document = {
    DocumentID?: number;
    CompanyID?: number;
    File?: File;
    Name?: string;
    Description?: string;
    DocumentDate?: Date;
    CreationDate?: Date;
    Tags?: Array<string>;
};
export type File = {
    FileID?: string;
    FileName?: string;
    MimeType?: string;
    FileContent?: string;
};
export type ODataQueryOptionsDocumentApiView = {
    readonly IfMatch?: {
        [key: string]: unknown;
    };
    readonly IfNoneMatch?: {
        [key: string]: unknown;
    };
    Context?: ODataQueryContext;
    readonly Request?: {
        [key: string]: unknown;
    };
    RawValues?: ODataRawQueryOptions;
    SelectExpand?: SelectExpandQueryOption;
    Filter?: FilterQueryOption;
    OrderBy?: OrderByQueryOption;
    Skip?: SkipQueryOption;
    Top?: TopQueryOption;
    InlineCount?: InlineCountQueryOption;
    Validator?: ODataQueryValidator;
};
export type PageResultDocumentApiView = {
    Items?: Array<DocumentApiView>;
    NextPageLink?: string;
    Count?: bigint;
};
export type DocumentApiView = {
    DocumentID?: number;
    CompanyID?: number;
    File?: File;
    Name?: string;
    Description?: string;
    DocumentDate?: Date;
    CreationDate?: Date;
    Tags?: Array<string>;
};
export type EinvoiceRegistrationPost = {
    TaxIdentifier?: string;
    CompanyName?: string;
    CommercialName?: string;
    Addresses?: Array<PartyAddress>;
    TaxDeductable?: boolean;
    TaxLiable?: boolean;
    IBAN?: string;
    BIC?: string;
    Mobile?: string;
    Phone?: string;
    Email?: string;
    ContactFirstName?: string;
    ContactLastName?: string;
    Language?: string;
    Identifiers?: Array<PartyIdentifier>;
    AccountSettings?: EinvoiceAccountSettings;
};
export type EinvoiceAccountSettings = {
    ProcessUBLPrePaidAmount?: boolean;
};
export type AccountRegistrationResponse = {
    RegistrationID?: number;
};
export type GetEinvoiceAccountsReponse = {
    Companies?: Array<EinvoiceRegistrationsAccount>;
};
export type EinvoiceRegistrationsAccount = {
    RegistrationID?: number;
    CompanyDetails?: EinvoiceRegistrationPost;
    Integrations?: Array<EinvoiceIntegration>;
};
export type EinvoiceIntegration = {
    IntegrationID?: number;
    Integration?: string;
    IntegrationStatus?: string;
    IntegrationStatusDescription?: string;
    IntegrationDocumentToSign?: string;
};
export type IntegrationPost = {
    Externalprovider?: string;
    Credentials?: {
        [key: string]: string;
    };
    Certificates?: {
        [key: string]: File;
    };
};
export type CreateAndSendEDocumentPost = {
    TransportType?: string;
    Order?: Order;
};
export type Order = {
    OrderID?: number;
    CompanyID?: number;
    OrderPDF?: File;
    Attachments?: Array<File>;
    OrderNumber?: string;
    CustomerID?: number;
    SupplierID?: number;
    CounterPartyID?: number;
    Customer?: Party;
    Supplier?: Party;
    CounterParty?: Party;
    OrderDate?: Date;
    ExpiryDate?: Date;
    OrderType?: string;
    LastModified?: Date;
    Created?: Date;
    OrderDirection?: string;
    OrderLines?: Array<OrderLine>;
    BookingEntries?: Array<BookingEntry>;
    Journal?: string;
    OrderTitle?: string;
    PaymentDiscountPercentage?: number;
    PaymentDiscountAmount?: number;
    PaymentReductionDays?: number;
    PaymentDiscountDate?: Date;
    VatGroups?: Array<VatGroup>;
    VentilationCode?: string;
    TotalExcl?: number;
    TotalIncl?: number;
    TotalVAT?: number;
    Reference?: string;
    Tags?: Array<string>;
    DepartmentID?: number;
    PaymentReference?: string;
    AboutInvoiceNumber?: string;
    OCRRawText?: string;
    OCRMetaPages?: Array<OcrPage>;
    Paid?: boolean;
    PaidDate?: Date;
    ExternalProviderID?: string;
    ExternalProvider?: string;
    ProjectID?: number;
    ProjectName?: string;
    ExternalProviderReferences?: Array<ExternalProviderReference>;
    Comments?: string;
    Currency?: string;
    VatDeduction?: number;
    MixedUseProfessionalPercentage?: number;
    InternalInfo?: string;
    IsSent?: boolean;
    Invoiced?: boolean;
    CustomFields?: {
        [key: string]: string;
    };
    PeriodFrom?: Date;
    PeriodTill?: Date;
    CostCategoryCode?: number;
    AccountCode?: number;
    AccountingCostTypeTC?: string;
    LastReminder?: Date;
    RemindersSent?: number;
    ToPay?: number;
    OrderStatus?: string;
    ApprovalStatus?: string;
    Overdue?: boolean;
    DaysOverdue?: number;
    FXRateToForeign?: number;
    PaymentMethod?: string;
    DeliveryDate?: Date;
    ExportedToConnector?: boolean;
    PaymentLinks?: Array<PaymentLink>;
    TemplateID?: number;
    MessageTemplateID?: number;
    AnalyticCostBearer?: string;
    AnalyticCostCenter?: string;
    AccountantVerificationNeeded?: boolean;
    CurrentDocumentDeliveryDetails?: DocumentDeliveryDetails;
    Messages?: Array<OrderMessage>;
    AdditionalDocumentReference?: Array<AdditionalDocuments>;
    PaymentTerms?: string;
    ContractDocumentReference?: Array<ContractDocumentReference>;
    TaxPointDate?: Date;
    CategoryFieldItems?: Array<CategoryFieldItem>;
    Signature?: EInvoiceSignatureModel;
};
export type OrderLine = {
    Quantity?: number;
    UnitPriceExcl?: number;
    AccountCode?: number;
    Reference?: string;
    Description?: string;
    TotalExcl?: number;
    TotalVAT?: number;
    VATPercentage?: number;
    VentilationCode?: string;
    ProductID?: number;
    Unit?: string;
    CustomFields?: {
        [key: string]: string;
    };
    ExternalProviderReferences?: Array<ExternalProviderReference>;
    InclLeading?: boolean;
    UnitPriceIncl?: number;
    TotalIncl?: number;
    AnalyticCostBearer?: string;
    AnalyticCostCenter?: string;
    ReductionPercentage?: number;
    DescriptionExtended?: string;
};
export type BookingEntry = {
    BookingEntryID?: number;
    OrderID?: number;
    AccountCode?: number;
    Amount?: number;
    DebetOrCredit?: string;
    VAT1?: number;
    VAT2?: number;
    VAT3?: number;
};
export type VatGroup = {
    VentilationCode?: string;
    VATPercentage?: number;
    TotalExcl?: number;
    TotalVAT?: number;
    TotalIncl?: number;
    Mtvh?: number;
    FinancialReductionAmount?: number;
};
export type OcrPage = {
    TextList?: Array<OcrText>;
};
export type ExternalProviderReference = {
    ExternalProvider?: string;
    Category?: string;
    Value?: string;
    EntityType?: string;
    EntityID?: number;
};
export type PaymentLink = {
    ExternalProvider?: string;
    ClickUrl?: string;
    QRImageUrl?: string;
};
export type DocumentDeliveryDetails = {
    DocumentRefusedDate?: Date;
    DocumentDeliveryDate?: Date;
    DocumentDeliveryInfo?: string;
    DocumentRefusedReasonTC?: string;
    DocumentRefusedInfo?: string;
    IsDocumentDelivered?: boolean;
    DocumentDeliveryStatus?: string;
};
export type OrderMessage = {
    OrderID?: number;
    Description?: string;
    FileID?: string;
    CreationDate?: Date;
    TransportType?: string;
    Success?: boolean;
    Trials?: number;
    Destination?: string;
    MessageDirection?: string;
};
export type AdditionalDocuments = {
    DocumentDescription?: string;
    ID?: string;
    DocumentType?: string;
    Attachment?: File;
    CustomFields?: {
        [key: string]: string;
    };
};
export type ContractDocumentReference = {
    ID?: string;
};
export type CategoryFieldItem = {
    Value?: string;
    Name?: string;
};
export type EInvoiceSignatureModel = {
    OrginalString?: string;
    NetworkCertificateNumber?: string;
    DocumentCertificateNumber?: string;
    UUID?: string;
    NetworkStamp?: string;
    DocumentStamp?: string;
    DateTimeInfo?: TimezoneInfo;
    QRCode?: string;
    Cfdi?: string;
    StampUrl?: string;
};
export type OcrText = {
    Text?: string;
    X?: number;
    Y?: number;
    Width?: number;
    Height?: number;
};
export type TimezoneInfo = {
    TimeZoneInfo?: string;
    DateTime?: Date;
};
export type CreateAndSendEdocumentResponse = {
    OrderID?: number;
    TranssportStatus?: number;
    TransportMessages?: Array<_Error>;
};
export type _Error = {
    ErrorEnum?: string;
    ErrorParams?: Array<{
        [key: string]: unknown;
    }>;
    ErrorMessage?: string;
    Append?: string;
    DefaultText?: string;
};
export type ODataQueryOptionsOrder = {
    readonly IfMatch?: {
        [key: string]: unknown;
    };
    readonly IfNoneMatch?: {
        [key: string]: unknown;
    };
    Context?: ODataQueryContext;
    readonly Request?: {
        [key: string]: unknown;
    };
    RawValues?: ODataRawQueryOptions;
    SelectExpand?: SelectExpandQueryOption;
    Filter?: FilterQueryOption;
    OrderBy?: OrderByQueryOption;
    Skip?: SkipQueryOption;
    Top?: TopQueryOption;
    InlineCount?: InlineCountQueryOption;
    Validator?: ODataQueryValidator;
};
export type PageResultOrder = {
    Items?: Array<Order>;
    NextPageLink?: string;
    Count?: bigint;
};
export type Webhook = {
    WebhookID?: number;
    CompanyID?: number;
    UserID?: number;
    EntityType?: string;
    EntityUpdateType?: string;
    WebhookURL?: string;
    Secret?: string;
};
export type KycInitiationPost = {
    IdentificationProviderTC?: string;
    RedirectURL?: string;
};
export type KycInitiationResponse = {
    URL?: string;
};
export type Transaction = {
    BankAccountTransactionID?: number;
    BankName?: string;
    IBAN?: string;
    BIC?: string;
    BankAccountID?: number;
    DocumentId?: number;
    IBANCounterParty?: string;
    BICCounterParty?: string;
    NameCounterParty?: string;
    TotalAmount?: number;
    TransactionType?: string;
    ValueDate?: Date;
    Currency?: string;
    Description?: string;
    ExternalProviderID?: string;
    ExternalProviderTC?: string;
    FreeMessage?: string;
    CodaSource?: string;
    CodaFileID?: string;
    BankReference?: string;
    ClientReference?: string;
    Note?: string;
    AssignedEntities?: Array<AssignedEntity>;
    ProprietaryBankTransactionCode?: string;
    BankTransactionCode?: string;
};
export type AssignedEntity = {
    AssignedAmount?: number;
    FXRateToBankCurrency?: number;
    EntityType?: string;
    EntityID?: number;
};
export type ODataQueryOptionsTransaction = {
    readonly IfMatch?: {
        [key: string]: unknown;
    };
    readonly IfNoneMatch?: {
        [key: string]: unknown;
    };
    Context?: ODataQueryContext;
    readonly Request?: {
        [key: string]: unknown;
    };
    RawValues?: ODataRawQueryOptions;
    SelectExpand?: SelectExpandQueryOption;
    Filter?: FilterQueryOption;
    OrderBy?: OrderByQueryOption;
    Skip?: SkipQueryOption;
    Top?: TopQueryOption;
    InlineCount?: InlineCountQueryOption;
    Validator?: ODataQueryValidator;
};
export type PageResultTransaction = {
    Items?: Array<Transaction>;
    NextPageLink?: string;
    Count?: bigint;
};
export type GlAccount = {
    Code?: number;
    Description?: string;
    GLAccountType?: string;
};
export type Journal = {
    Code?: string;
    Description?: string;
    JournalType?: "Income" | "Cost";
};
export type CompanySearchResult = {
    Items?: Array<CompanySearchResultItem>;
};
export type CompanySearchResultItem = {
    /**
     * Either KBO or VIES
     */
    Source?: string;
    CompanyIdentification?: string;
    Street?: string;
    Number?: string;
    Name?: string;
    Zipcode?: string;
    City?: string;
    Box?: string;
    Country?: string;
    StartDate?: Date;
    CommercialName?: string;
};
export type TypeCodeResult = {
    Items?: Array<TypeCodeResultItem>;
};
export type TypeCodeResultItem = {
    Key?: string;
    Value?: string;
};
export type OAuthAccessTokenRequest = {
    client_id?: string;
    client_secret?: string;
    code?: string;
    grant_type?: string;
    redirect_uri?: string;
    refresh_token?: string;
    state?: string;
};
export type PostPaymentRequest = {
    Amount?: number;
    Description?: string;
    Date?: Date;
};
export type SendRequest = {
    OrderIds?: Array<number>;
    TransportType?: string;
    PrintType?: string;
};
export type ODataQueryOptionsParty = {
    readonly IfMatch?: {
        [key: string]: unknown;
    };
    readonly IfNoneMatch?: {
        [key: string]: unknown;
    };
    Context?: ODataQueryContext;
    readonly Request?: {
        [key: string]: unknown;
    };
    RawValues?: ODataRawQueryOptions;
    SelectExpand?: SelectExpandQueryOption;
    Filter?: FilterQueryOption;
    OrderBy?: OrderByQueryOption;
    Skip?: SkipQueryOption;
    Top?: TopQueryOption;
    InlineCount?: InlineCountQueryOption;
    Validator?: ODataQueryValidator;
};
export type PageResultParty = {
    Items?: Array<Party>;
    NextPageLink?: string;
    Count?: bigint;
};
export type RegisterParticipantRequest = {
    CompanyID?: string;
};
export type DeleteParticipantRequest = {
    CompanyID?: string;
};
export type InboxGetResult = {
    InboxItems?: Array<InboxGetResultItem>;
};
export type InboxGetResultItem = {
    InboxItemID?: number;
    SenderPeppolID?: string;
    PeppolDocumentType?: string;
    ReceiverPeppolID?: string;
    SenderCompanyID?: string;
    ReceiverCompanyID?: string;
    CreationDate?: Date;
    PeppolFileID?: string;
};
export type RefusePeppolItemRequest = {
    RefusalReason?: string;
};
export type ParticipantInformationResponse = {
    Registered?: boolean;
    Identifier?: string;
    DocumentTypes?: Array<"Invoice4" | "Invoice5" | "CreditNote5" | "MLR" | "MLRBISV3" | "MLRBISV2" | "IMR" | "EFFF" | "BISv3Invoice" | "BISv3CreditNote" | "BISv3OrderForm" | "BISv3AUNZInvoice" | "BISv3AUNZCreditNote" | "XRechnung22Invoice" | "XRechnung22CreditNote" | "SIInvoice" | "SICreditNote" | "UBLBEInvoice" | "UBLBECreditNote" | "CII" | "PTCIUSInvoice" | "PTCIUSCreditNote" | "BISv3SGInvoice" | "BISv3SGCreditNote" | "ROCIUSInvoice" | "ROCIUSCreditNote" | "XRechnung3Invoice" | "XRechnung3CreditNote" | "EndUserStatistics" | "TransactionStatistics" | "MYPintInvoice" | "MYPintCreditNote" | "MYPintInvoiceWildCard" | "MYPintCreditNoteWildCard" | "PintInvoiceWildCard" | "PintCreditNoteWildCard" | "AUNZPintInvoice" | "AUNZPintCreditNote" | "FACeCIUSInvoice" | "FACeCIUSCreditNote" | "PintBillingWildCard">;
    ServiceDetails?: Array<ServiceDetail>;
    ServiceProviderID?: string;
};
export type ServiceDetail = {
    DocumentIdentifier?: string;
    DocumentIdentifierScheme?: string;
    Processes?: Array<ProcessInfo>;
};
export type ProcessInfo = {
    ProcessIdentifier?: string;
    ProcessIdentifierScheme?: string;
    Endpoints?: Array<Endpoint>;
};
export type Endpoint = {
    EndpointURL?: string;
    TransportProfile?: string;
    Certificate?: string;
};
export type Product = {
    ProductID?: number;
    Reference?: string;
    Description?: string;
    AmountExcl?: number;
    VAT?: number;
    Unit?: string;
    GroupID?: number;
    GroupName?: string;
    AmountIncl?: number;
    StockQuantity?: number;
    MinimumBilledQuantity?: number;
    BuyExcl?: number;
    InternalInformation?: string;
    Created?: Date;
    LastModified?: Date;
    EAN?: string;
    GTIN?: string;
    GLN?: string;
    ExternalProviderTC?: string;
    ChildProducts?: Array<Product>;
};
export type ODataQueryOptionsProduct = {
    readonly IfMatch?: {
        [key: string]: unknown;
    };
    readonly IfNoneMatch?: {
        [key: string]: unknown;
    };
    Context?: ODataQueryContext;
    readonly Request?: {
        [key: string]: unknown;
    };
    RawValues?: ODataRawQueryOptions;
    SelectExpand?: SelectExpandQueryOption;
    Filter?: FilterQueryOption;
    OrderBy?: OrderByQueryOption;
    Skip?: SkipQueryOption;
    Top?: TopQueryOption;
    InlineCount?: InlineCountQueryOption;
    Validator?: ODataQueryValidator;
};
export type PageResultProduct = {
    Items?: Array<Product>;
    NextPageLink?: string;
    Count?: bigint;
};
export type ReportsExportOverViewModel = {
    ReportID?: number;
    ReportName?: string;
};
export type ReportDetailModel = {
    ID?: number;
    Name?: string;
    CSVs?: Array<string>;
};
export type ToProcessSaveRequest = {
    Split?: boolean;
    File?: File;
    FileSource?: File;
    MetaData?: UploadMetadata;
};
export type UploadMetadata = {
    TotalIncl?: number;
    CostType?: string;
    PaymentMethod?: string;
    Description?: string;
    CurrencyTC?: string;
    OrderDate?: Date;
};
export type AccountGetAccountInformationData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/account/accountInformation";
};
export type AccountGetAccountInformationErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountGetAccountInformationResponses = {
    /**
     * Account information of the current user
     */
    200: AccountInformation;
};
export type AccountGetAccountInformationResponse = AccountGetAccountInformationResponses[keyof AccountGetAccountInformationResponses];
export type AccountGetSsoTokenData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/account/ssoToken";
};
export type AccountGetSsoTokenErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountGetSsoTokenResponses = {
    /**
     * object with SSO token
     */
    200: {
        [key: string]: unknown;
    };
};
export type AccountGetSsoTokenResponse = AccountGetSsoTokenResponses[keyof AccountGetSsoTokenResponses];
export type AccountPostSequencesData = {
    body: SequenceRequest;
    path?: never;
    query?: never;
    url: "/v1/account/sequences";
};
export type AccountPostSequencesErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountPostSequencesResponses = {
    /**
     * Sequence updated
     */
    200: string;
};
export type AccountPostSequencesResponse = AccountPostSequencesResponses[keyof AccountPostSequencesResponses];
export type AccountRegisterCompanyData = {
    body: RegisterAccountRequestModel;
    path?: never;
    query?: never;
    url: "/v1/account/registercompany";
};
export type AccountRegisterCompanyErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountRegisterCompanyResponses = {
    /**
     * New company registered
     */
    200: RegisterAccountResponse;
};
export type AccountRegisterCompanyResponse = AccountRegisterCompanyResponses[keyof AccountRegisterCompanyResponses];
export type AccountUpdateLicenseData = {
    body: UpdateLicenseRequestModel;
    path?: never;
    query?: never;
    url: "/v1/account/license";
};
export type AccountUpdateLicenseErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountUpdateLicenseResponses = {
    /**
     * Company license updated
     */
    200: number;
};
export type AccountUpdateLicenseResponse = AccountUpdateLicenseResponses[keyof AccountUpdateLicenseResponses];
export type AccountAddLicenseBillableData = {
    body: AddNewLicenseBillableModel;
    path?: never;
    query?: never;
    url: "/v1/account/license/addons";
};
export type AccountAddLicenseBillableErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountAddLicenseBillableResponses = {
    /**
     * New license billable added
     */
    200: number;
};
export type AccountAddLicenseBillableResponse = AccountAddLicenseBillableResponses[keyof AccountAddLicenseBillableResponses];
export type AccountantGetFeedsData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/accountant/feeds";
};
export type AccountantGetFeedsErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountantGetFeedsResponses = {
    /**
     * A list of all feeds to download.
     */
    200: Array<Feed>;
};
export type AccountantGetFeedsResponse = AccountantGetFeedsResponses[keyof AccountantGetFeedsResponses];
export type AccountantPostFeedsData = {
    body: Feed;
    path?: never;
    query?: never;
    url: "/v1/accountant/feeds";
};
export type AccountantPostFeedsErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountantPostFeedsResponses = {
    /**
     * Feed has been registered
     */
    200: unknown;
};
export type AccountantDeleteFeedsData = {
    body?: never;
    path: {
        feedName: string;
    };
    query?: never;
    url: "/v1/accountant/feeds/{feedName}";
};
export type AccountantDeleteFeedsErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountantDeleteFeedsResponses = {
    /**
     * Feed has been deleted
     */
    200: unknown;
};
export type AccountantGetIndexData = {
    body?: never;
    path: {
        feedName: string;
    };
    query?: never;
    url: "/v1/accountant/feeds/{feedName}";
};
export type AccountantGetIndexErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountantGetIndexResponses = {
    /**
     * A list of all files to download.
     */
    200: Array<FeedItem>;
};
export type AccountantGetIndexResponse = AccountantGetIndexResponses[keyof AccountantGetIndexResponses];
export type AccountantPostConfirmData = {
    body: ConfirmRequest;
    path: {
        feedName: string;
        feedItemID: number;
    };
    query?: never;
    url: "/v1/accountant/feeds/{feedName}/{feedItemID}/confirm";
};
export type AccountantPostConfirmErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountantPostConfirmResponses = {
    /**
     * Download confirmed
     */
    200: unknown;
};
export type AccountantGetFileData = {
    body?: never;
    path: {
        feedItemID: number;
        feedName: string;
    };
    query?: never;
    url: "/v1/accountant/feeds/{feedName}/{feedItemID}";
};
export type AccountantGetFileErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type AccountantGetFileResponses = {
    /**
     * File downloaded
     */
    200: FileDetails;
};
export type AccountantGetFileResponse = AccountantGetFileResponses[keyof AccountantGetFileResponses];
export type CashbookInitializeCashbookData = {
    body: CashbookInitialization;
    path?: never;
    query?: never;
    url: "/v1/Cashbook/Initialize";
};
export type CashbookInitializeCashbookErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type CashbookInitializeCashbookResponses = {
    /**
     * Cash book was initialized
     */
    200: number;
};
export type CashbookInitializeCashbookResponse = CashbookInitializeCashbookResponses[keyof CashbookInitializeCashbookResponses];
export type CashbookCloseCashbookData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/Cashbook/Close";
};
export type CashbookCloseCashbookErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type CashbookCloseCashbookResponses = {
    /**
     * Active cash book was closed
     */
    200: unknown;
};
export type CashbookGetCashbookData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/Cashbook";
};
export type CashbookGetCashbookErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type CashbookGetCashbookResponses = {
    /**
     * Information about the current active cash book
     */
    200: CashbookModel;
};
export type CashbookGetCashbookResponse = CashbookGetCashbookResponses[keyof CashbookGetCashbookResponses];
export type CashbookGetCashbookEntriesData = {
    body?: never;
    path?: never;
    query?: {
        fullTextSearch?: string;
    };
    url: "/v1/Cashbook/Entries";
};
export type CashbookGetCashbookEntriesErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type CashbookGetCashbookEntriesResponses = {
    /**
     * A list of all the entries in the cash book
     */
    200: PageResultCashbookEntry;
};
export type CashbookGetCashbookEntriesResponse = CashbookGetCashbookEntriesResponses[keyof CashbookGetCashbookEntriesResponses];
export type CashbookGetCashbooksData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/Cashbook/History";
};
export type CashbookGetCashbooksErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type CashbookGetCashbooksResponses = {
    /**
     * A list of all the closed cash books
     */
    200: Array<CashbookModel>;
};
export type CashbookGetCashbooksResponse = CashbookGetCashbooksResponses[keyof CashbookGetCashbooksResponses];
export type CashbookGetCashbookHistoryData = {
    body?: never;
    path: {
        cashbookID: number;
    };
    query?: {
        fullTextSearch?: string;
    };
    url: "/v1/Cashbook/{cashbookID}/History";
};
export type CashbookGetCashbookHistoryErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type CashbookGetCashbookHistoryResponses = {
    /**
     * A list of all the entries in a closed cash book
     */
    200: PageResultCashbookEntry;
};
export type CashbookGetCashbookHistoryResponse = CashbookGetCashbookHistoryResponses[keyof CashbookGetCashbookHistoryResponses];
export type CashbookPostCashbookEntryData = {
    body: CashbookEntry;
    path?: never;
    query?: never;
    url: "/v1/Cashbook/AddEntry";
};
export type CashbookPostCashbookEntryErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type CashbookPostCashbookEntryResponses = {
    /**
     * Entry has been added to the current active cash book
     */
    200: CashbookEntry;
};
export type CashbookPostCashbookEntryResponse = CashbookPostCashbookEntryResponses[keyof CashbookPostCashbookEntryResponses];
export type DailyReceiptPostDailyReceiptBookEntryData = {
    body: DailyReceiptBookEntryModel;
    path?: never;
    query?: never;
    url: "/v1/DailyReceiptBooks/commands/CreateEntryInOpenExistingOrNew";
};
export type DailyReceiptPostDailyReceiptBookEntryErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type DailyReceiptPostDailyReceiptBookEntryResponses = {
    /**
     * Daily receipt entry was created
     */
    200: PostDailyReceiptBookEntryResponseModel;
};
export type DailyReceiptPostDailyReceiptBookEntryResponse = DailyReceiptPostDailyReceiptBookEntryResponses[keyof DailyReceiptPostDailyReceiptBookEntryResponses];
export type DailyReceiptGetDailyReceiptEntryData = {
    body?: never;
    path: {
        DailyReceiptEntryID: number;
    };
    query?: never;
    url: "/v1/DailyReceiptBooks/DailyReceiptEntry/{DailyReceiptEntryID}";
};
export type DailyReceiptGetDailyReceiptEntryErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type DailyReceiptGetDailyReceiptEntryResponses = {
    /**
     * Detail of a daily receipt entry
     */
    200: GetDailyReceiptEntryResponseModel;
};
export type DailyReceiptGetDailyReceiptEntryResponse = DailyReceiptGetDailyReceiptEntryResponses[keyof DailyReceiptGetDailyReceiptEntryResponses];
export type DailyReceiptGetDailyReceiptBooksData = {
    body?: never;
    path: {
        DailyReceiptBookID: number;
    };
    query?: never;
    url: "/v1/DailyReceiptBooks/{DailyReceiptBookID}";
};
export type DailyReceiptGetDailyReceiptBooksErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type DailyReceiptGetDailyReceiptBooksResponses = {
    /**
     * Detail of a daily receipt book
     */
    200: DailyReceiptBookModelResponseModel;
};
export type DailyReceiptGetDailyReceiptBooksResponse = DailyReceiptGetDailyReceiptBooksResponses[keyof DailyReceiptGetDailyReceiptBooksResponses];
export type DailyReceiptGetDailyReceiptBooks2Data = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/DailyReceiptBooks";
};
export type DailyReceiptGetDailyReceiptBooks2Errors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type DailyReceiptGetDailyReceiptBooks2Responses = {
    /**
     * A list of daily receipt books
     */
    200: DailyReceiptBookModelResponseModel;
};
export type DailyReceiptGetDailyReceiptBooks2Response = DailyReceiptGetDailyReceiptBooks2Responses[keyof DailyReceiptGetDailyReceiptBooks2Responses];
export type DocumentGetDocumentsData = {
    body?: never;
    path?: never;
    query?: {
        fullTextSearch?: string;
    };
    url: "/v1/documents";
};
export type DocumentGetDocumentsResponses = {
    /**
     * A list of documents
     */
    200: PageResultDocumentApiView;
};
export type DocumentGetDocumentsResponse = DocumentGetDocumentsResponses[keyof DocumentGetDocumentsResponses];
export type DocumentPostDocumentData = {
    body: Document;
    path?: never;
    query?: never;
    url: "/v1/documents";
};
export type DocumentPostDocumentResponses = {
    /**
     * Document was saved
     */
    200: number;
};
export type DocumentPostDocumentResponse = DocumentPostDocumentResponses[keyof DocumentPostDocumentResponses];
export type DocumentGetDocumentData = {
    body?: never;
    path: {
        documentID: number;
    };
    query?: never;
    url: "/v1/documents/{documentID}";
};
export type DocumentGetDocumentResponses = {
    /**
     * A document
     */
    200: DocumentApiView;
};
export type DocumentGetDocumentResponse = DocumentGetDocumentResponses[keyof DocumentGetDocumentResponses];
export type EinvoiceGetRegistrationsData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/einvoices/registrations";
};
export type EinvoiceGetRegistrationsErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoiceGetRegistrationsResponses = {
    /**
     * A list of E-invoice registrations
     */
    200: GetEinvoiceAccountsReponse;
};
export type EinvoiceGetRegistrationsResponse = EinvoiceGetRegistrationsResponses[keyof EinvoiceGetRegistrationsResponses];
export type EinvoicePostRegistrationData = {
    body: EinvoiceRegistrationPost;
    path?: never;
    query?: never;
    url: "/v1/einvoices/registrations";
};
export type EinvoicePostRegistrationErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoicePostRegistrationResponses = {
    /**
     * E-invoice registration was created
     */
    200: AccountRegistrationResponse;
};
export type EinvoicePostRegistrationResponse = EinvoicePostRegistrationResponses[keyof EinvoicePostRegistrationResponses];
export type EinvoiceDeleteRegistrationData = {
    body?: never;
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}";
};
export type EinvoiceDeleteRegistrationErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoiceDeleteRegistrationResponses = {
    /**
     * Registration was deleted
     */
    200: boolean;
};
export type EinvoiceDeleteRegistrationResponse = EinvoiceDeleteRegistrationResponses[keyof EinvoiceDeleteRegistrationResponses];
export type EinvoiceGetRegistrationData = {
    body?: never;
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}";
};
export type EinvoiceGetRegistrationErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoiceGetRegistrationResponses = {
    /**
     * An E-invoice registration
     */
    200: GetEinvoiceAccountsReponse;
};
export type EinvoiceGetRegistrationResponse = EinvoiceGetRegistrationResponses[keyof EinvoiceGetRegistrationResponses];
export type EinvoicePatchEntityData = {
    body: {
        [key: string]: unknown;
    };
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}";
};
export type EinvoicePatchEntityErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoicePatchEntityResponses = {
    /**
     * Properties were updated
     */
    200: boolean;
};
export type EinvoicePatchEntityResponse = EinvoicePatchEntityResponses[keyof EinvoicePatchEntityResponses];
export type EinvoicePostRegistrationIntegrationData = {
    body: IntegrationPost;
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/integrations";
};
export type EinvoicePostRegistrationIntegrationErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoicePostRegistrationIntegrationResponses = {
    /**
     * Integration was activated
     */
    200: EinvoiceIntegration;
};
export type EinvoicePostRegistrationIntegrationResponse = EinvoicePostRegistrationIntegrationResponses[keyof EinvoicePostRegistrationIntegrationResponses];
export type EinvoiceDeleteRegistrationIntegrationData = {
    body?: never;
    path: {
        registrationID: number;
        integrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/integrations/{integrationID}";
};
export type EinvoiceDeleteRegistrationIntegrationErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoiceDeleteRegistrationIntegrationResponses = {
    /**
     * Integration was deactivated
     */
    200: boolean;
};
export type EinvoiceDeleteRegistrationIntegrationResponse = EinvoiceDeleteRegistrationIntegrationResponses[keyof EinvoiceDeleteRegistrationIntegrationResponses];
export type EinvoicePostSendData = {
    body: CreateAndSendEDocumentPost;
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/commands/send";
};
export type EinvoicePostSendErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoicePostSendResponses = {
    /**
     * E-document was created and sent
     */
    200: CreateAndSendEdocumentResponse;
};
export type EinvoicePostSendResponse = EinvoicePostSendResponses[keyof EinvoicePostSendResponses];
export type EinvoiceGetOrdersData = {
    body?: never;
    path: {
        registrationID: number;
    };
    query?: {
        fullTextSearch?: string;
    };
    url: "/v1/einvoices/registrations/{registrationID}/orders";
};
export type EinvoiceGetOrdersErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoiceGetOrdersResponses = {
    /**
     * A list of orders
     */
    200: PageResultOrder;
};
export type EinvoiceGetOrdersResponse = EinvoiceGetOrdersResponses[keyof EinvoiceGetOrdersResponses];
export type EinvoiceGetFileData = {
    body?: never;
    path: {
        registrationID: number;
        fileID: string;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/files/{fileID}";
};
export type EinvoiceGetFileErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoiceGetFileResponses = {
    /**
     * A file
     */
    200: File;
};
export type EinvoiceGetFileResponse = EinvoiceGetFileResponses[keyof EinvoiceGetFileResponses];
export type EinvoiceGetOrderData = {
    body?: never;
    path: {
        registrationID: number;
        orderID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/orders/{orderID}";
};
export type EinvoiceGetOrderErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoiceGetOrderResponses = {
    /**
     * An order
     */
    200: Order;
};
export type EinvoiceGetOrderResponse = EinvoiceGetOrderResponses[keyof EinvoiceGetOrderResponses];
export type EinvoicePatchOrderData = {
    body: {
        [key: string]: unknown;
    };
    path: {
        registrationID: number;
        orderID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/orders/{orderID}";
};
export type EinvoicePatchOrderErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type EinvoicePatchOrderResponses = {
    /**
     * Properties were updated
     */
    200: unknown;
};
export type EinvoiceGetWebhooksData = {
    body?: never;
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/webhooks";
};
export type EinvoiceGetWebhooksErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoiceGetWebhooksResponses = {
    /**
     * A list of webhooks
     */
    200: Array<Webhook>;
};
export type EinvoiceGetWebhooksResponse = EinvoiceGetWebhooksResponses[keyof EinvoiceGetWebhooksResponses];
export type EinvoicePostWebhookData = {
    body: Webhook;
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/webhooks";
};
export type EinvoicePostWebhookErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoicePostWebhookResponses = {
    /**
     * Webhook was created
     */
    200: Webhook;
};
export type EinvoicePostWebhookResponse = EinvoicePostWebhookResponses[keyof EinvoicePostWebhookResponses];
export type EinvoiceDeleteWebhooksData = {
    body?: never;
    path: {
        registrationID: number;
        webhookID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/webhooks/{webhookID}";
};
export type EinvoiceDeleteWebhooksErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoiceDeleteWebhooksResponses = {
    /**
     * Webhook was deleted
     */
    200: boolean;
};
export type EinvoiceDeleteWebhooksResponse = EinvoiceDeleteWebhooksResponses[keyof EinvoiceDeleteWebhooksResponses];
export type EinvoiceRefreshWebhookSecretData = {
    body?: never;
    path: {
        registrationID: number;
        webhookID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/webhooks/refresh/{webhookID}";
};
export type EinvoiceRefreshWebhookSecretErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoiceRefreshWebhookSecretResponses = {
    /**
     * Refreshed webhook secret
     */
    200: string;
};
export type EinvoiceRefreshWebhookSecretResponse = EinvoiceRefreshWebhookSecretResponses[keyof EinvoiceRefreshWebhookSecretResponses];
export type EinvoicePostKycInitiationData = {
    body: KycInitiationPost;
    path: {
        registrationID: number;
    };
    query?: never;
    url: "/v1/einvoices/registrations/{registrationID}/identification";
};
export type EinvoicePostKycInitiationErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type EinvoicePostKycInitiationResponses = {
    /**
     * KYC procedure was initiated
     */
    200: KycInitiationResponse;
};
export type EinvoicePostKycInitiationResponse = EinvoicePostKycInitiationResponses[keyof EinvoicePostKycInitiationResponses];
export type FileGetOrdersData = {
    body?: never;
    path: {
        fileID: string;
    };
    query?: never;
    url: "/v1/files/{fileID}";
};
export type FileGetOrdersErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type FileGetOrdersResponses = {
    /**
     * A file
     */
    200: File;
};
export type FileGetOrdersResponse = FileGetOrdersResponses[keyof FileGetOrdersResponses];
export type FinancialTransactionPostImportFileData = {
    body: File;
    path?: never;
    query?: never;
    url: "/v1/financialTransactions/importFile";
};
export type FinancialTransactionPostImportFileErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type FinancialTransactionPostImportFileResponses = {
    /**
     * Coda file uploaded
     */
    200: unknown;
};
export type FinancialTransactionPostImportData = {
    body: Array<Transaction>;
    path?: never;
    query?: never;
    url: "/v1/financialTransactions/commands/import";
};
export type FinancialTransactionPostImportErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type FinancialTransactionPostImportResponses = {
    /**
     * Transactions were created
     */
    200: unknown;
};
export type FinancialTransactionGetBankTransactionsData = {
    body?: never;
    path?: never;
    query?: {
        fullTextSearch?: string;
    };
    url: "/v1/financialTransactions";
};
export type FinancialTransactionGetBankTransactionsErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type FinancialTransactionGetBankTransactionsResponses = {
    200: unknown;
};
export type GlAccountPostGlAccountData = {
    body: GlAccount;
    path?: never;
    query?: never;
    url: "/v1/glaccounts";
};
export type GlAccountPostGlAccountErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GlAccountPostGlAccountResponses = {
    /**
     * General ledger account was created
     */
    200: number;
};
export type GlAccountPostGlAccountResponse = GlAccountPostGlAccountResponses[keyof GlAccountPostGlAccountResponses];
export type GlAccountPostGlAccountBulkData = {
    body: Array<GlAccount>;
    path?: never;
    query?: never;
    url: "/v1/glaccounts/commands/import";
};
export type GlAccountPostGlAccountBulkErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GlAccountPostGlAccountBulkResponses = {
    /**
     * General ledger accounts were created
     */
    200: unknown;
};
export type JournalPostGlAccountData = {
    body: Array<Journal>;
    path?: never;
    query?: never;
    url: "/v1/journals/commands/import";
};
export type JournalPostGlAccountErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type JournalPostGlAccountResponses = {
    /**
     * List of journals was imported
     */
    200: unknown;
};
export type MiscGetCompanySearchData = {
    body?: never;
    path: {
        Keywords: string;
    };
    query?: never;
    url: "/v1/misc/companysearch/{Keywords}";
};
export type MiscGetCompanySearchErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type MiscGetCompanySearchResponses = {
    /**
     * Search result based on a keyword
     */
    200: CompanySearchResult;
};
export type MiscGetCompanySearchResponse = MiscGetCompanySearchResponses[keyof MiscGetCompanySearchResponses];
export type MiscGetTypeCodesData = {
    body?: never;
    path: {
        TypeCodeType: string;
    };
    query?: never;
    url: "/v1/misc/typecodes/{TypeCodeType}";
};
export type MiscGetTypeCodesErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type MiscGetTypeCodesResponses = {
    /**
     * A list of translations of a specified TypeCode
     */
    200: TypeCodeResult;
};
export type MiscGetTypeCodesResponse = MiscGetTypeCodesResponses[keyof MiscGetTypeCodesResponses];
export type MiscGetTranslationData = {
    body?: never;
    path: {
        TypeCodeType: string;
        key: string;
        language: string;
    };
    query?: never;
    url: "/v1/misc/typecodes/{TypeCodeType}/{key}/{language}";
};
export type MiscGetTranslationErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type MiscGetTranslationResponses = {
    /**
     * A translation of a key of a typecode
     */
    200: TypeCodeResult;
};
export type MiscGetTranslationResponse = MiscGetTranslationResponses[keyof MiscGetTranslationResponses];
export type OAuth2PostTokenData = {
    body: OAuthAccessTokenRequest;
    path?: never;
    query?: never;
    url: "/OAuth2/token";
};
export type OAuth2PostTokenErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type OAuth2PostTokenResponses = {
    /**
     * OK
     */
    200: {
        [key: string]: unknown;
    };
};
export type OAuth2PostTokenResponse = OAuth2PostTokenResponses[keyof OAuth2PostTokenResponses];
export type OAuth2PostTokenRevokeData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/OAuth2/revoke";
};
export type OAuth2PostTokenRevokeErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type OAuth2PostTokenRevokeResponses = {
    /**
     * OK
     */
    200: {
        [key: string]: unknown;
    };
};
export type OAuth2PostTokenRevokeResponse = OAuth2PostTokenRevokeResponses[keyof OAuth2PostTokenRevokeResponses];
export type OrderGetOrdersData = {
    body?: never;
    path?: never;
    query?: {
        fullTextSearch?: string;
    };
    url: "/v1/orders";
};
export type OrderGetOrdersErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type OrderGetOrdersResponses = {
    /**
     * A list of invoices/creditnotes/offers/...
     */
    200: PageResultOrder;
};
export type OrderGetOrdersResponse = OrderGetOrdersResponses[keyof OrderGetOrdersResponses];
export type OrderPostOrdersData = {
    body: Order;
    path?: never;
    query?: never;
    url: "/v1/orders";
};
export type OrderPostOrdersErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderPostOrdersResponses = {
    /**
     * Order was created/updated
     */
    200: number;
};
export type OrderPostOrdersResponse = OrderPostOrdersResponses[keyof OrderPostOrdersResponses];
export type OrderPutOrderBookingsData = {
    body: Array<BookingEntry>;
    path: {
        orderID: number;
    };
    query?: never;
    url: "/v1/orders/{orderID}/bookingEntries";
};
export type OrderPutOrderBookingsErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderPutOrderBookingsResponses = {
    /**
     * Booking lines added successfully
     */
    200: unknown;
};
export type OrderDeleteOrderData = {
    body?: never;
    path: {
        orderID: number;
    };
    query?: never;
    url: "/v1/orders/{orderID}";
};
export type OrderDeleteOrderErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderDeleteOrderResponses = {
    /**
     * Order was deleted
     */
    200: boolean;
};
export type OrderDeleteOrderResponse = OrderDeleteOrderResponses[keyof OrderDeleteOrderResponses];
export type OrderGetOrderData = {
    body?: never;
    path: {
        orderID: number;
    };
    query?: {
        documentType?: string;
    };
    url: "/v1/orders/{orderID}";
};
export type OrderGetOrderErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderGetOrderResponses = {
    /**
     * An order based on the orderID
     */
    200: Order;
};
export type OrderGetOrderResponse = OrderGetOrderResponses[keyof OrderGetOrderResponses];
export type OrderPatchOrdersData = {
    body: {
        [key: string]: unknown;
    };
    path: {
        orderID: number;
    };
    query?: never;
    url: "/v1/orders/{orderID}";
};
export type OrderPatchOrdersErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderPatchOrdersResponses = {
    /**
     * Properties were updated
     */
    200: unknown;
};
export type OrderPostOrderPaymentData = {
    body: PostPaymentRequest;
    path: {
        orderID: number;
    };
    query?: never;
    url: "/v1/orders/{orderID}/payments";
};
export type OrderPostOrderPaymentErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderPostOrderPaymentResponses = {
    /**
     * Payment was added to the order
     */
    200: unknown;
};
export type OrderPostSendData = {
    body: SendRequest;
    path?: never;
    query?: never;
    url: "/v1/orders/commands/send";
};
export type OrderPostSendErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderPostSendResponses = {
    /**
     * All orders have been sent
     */
    200: unknown;
};
export type OrderESignOrderData = {
    body?: never;
    path: {
        orderID: number;
    };
    query?: never;
    url: "/v1/orders/commands/eSign/{orderID}";
};
export type OrderESignOrderErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type OrderESignOrderResponses = {
    /**
     * Order was E-Signed
     */
    200: boolean;
};
export type OrderESignOrderResponse = OrderESignOrderResponses[keyof OrderESignOrderResponses];
export type OrderGetDeletedData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/orders/deleted";
};
export type OrderGetDeletedErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type OrderGetDeletedResponses = {
    /**
     * A list of deleted orders
     */
    200: PageResultOrder;
};
export type OrderGetDeletedResponse = OrderGetDeletedResponses[keyof OrderGetDeletedResponses];
export type PartyGetPartyData = {
    body?: never;
    path: {
        partyID: number;
    };
    query?: never;
    url: "/v1/parties/{partyID}";
};
export type PartyGetPartyErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PartyGetPartyResponses = {
    /**
     * A party specified by the partyID
     */
    200: Party;
};
export type PartyGetPartyResponse = PartyGetPartyResponses[keyof PartyGetPartyResponses];
export type PartyPatchPartiesData = {
    body: {
        [key: string]: unknown;
    };
    path: {
        partyID: number;
    };
    query?: never;
    url: "/v1/parties/{partyID}";
};
export type PartyPatchPartiesErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type PartyPatchPartiesResponses = {
    /**
     * Properties were updated
     */
    200: unknown;
};
export type PartyGetPartiesData = {
    body?: never;
    path?: never;
    query?: {
        fullTextSearch?: string;
    };
    url: "/v1/parties";
};
export type PartyGetPartiesErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PartyGetPartiesResponses = {
    /**
     * A list of parties
     */
    200: PageResultParty;
};
export type PartyGetPartiesResponse = PartyGetPartiesResponses[keyof PartyGetPartiesResponses];
export type PartyPostPartyData = {
    body: Party;
    path?: never;
    query?: never;
    url: "/v1/parties";
};
export type PartyPostPartyErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Not Found
     */
    404: unknown;
};
export type PartyPostPartyResponses = {
    /**
     * Party was created/updated
     */
    200: number;
};
export type PartyPostPartyResponse = PartyPostPartyResponses[keyof PartyPostPartyResponses];
export type PeppolDeleteParticipantData = {
    body: DeleteParticipantRequest;
    path?: never;
    query?: never;
    url: "/v1/peppol/participants";
};
export type PeppolDeleteParticipantErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PeppolDeleteParticipantResponses = {
    /**
     * Peppol registration was deleted
     */
    200: unknown;
};
export type PeppolPostParticipantData = {
    body: RegisterParticipantRequest;
    path?: never;
    query?: never;
    url: "/v1/peppol/participants";
};
export type PeppolPostParticipantErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PeppolPostParticipantResponses = {
    /**
     * Company was registered on Peppol
     */
    200: unknown;
};
export type PeppolGetInboxData = {
    body?: never;
    path?: never;
    query?: {
        ReceiverCompanyID?: string;
    };
    url: "/v1/peppol/inbox";
};
export type PeppolGetInboxErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PeppolGetInboxResponses = {
    /**
     * An inbox result with a list of the first 10 items in the inbox
     */
    200: InboxGetResult;
};
export type PeppolGetInboxResponse = PeppolGetInboxResponses[keyof PeppolGetInboxResponses];
export type PeppolInboxItemConfirmData = {
    body?: never;
    path: {
        inboxItemId: number;
    };
    query?: never;
    url: "/v1/peppol/inbox/{inboxItemId}/confirm";
};
export type PeppolInboxItemConfirmErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PeppolInboxItemConfirmResponses = {
    /**
     * Inbox item was confirmed and removed from the queue
     */
    200: unknown;
};
export type PeppolInboxItemRefuseData = {
    body: RefusePeppolItemRequest;
    path: {
        inboxItemId: number;
    };
    query?: never;
    url: "/v1/peppol/inbox/{inboxItemId}/refuse";
};
export type PeppolInboxItemRefuseErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PeppolInboxItemRefuseResponses = {
    /**
     * Inbox item was refused and removed from the queue
     */
    200: unknown;
};
export type PeppolPostSendOrderData = {
    body: Order;
    path?: never;
    query?: never;
    url: "/v1/peppol/sendOrder";
};
export type PeppolPostSendOrderErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PeppolPostSendOrderResponses = {
    /**
     * Invoice was sent via Peppol
     */
    200: number;
};
export type PeppolPostSendOrderResponse = PeppolPostSendOrderResponses[keyof PeppolPostSendOrderResponses];
export type PeppolGetParticipantInformationData = {
    body?: never;
    path: {
        VATorCBE: string;
    };
    query?: {
        OnlyCheckDNS?: boolean;
    };
    url: "/v1/peppol/participantInformation/{VATorCBE}";
};
export type PeppolGetParticipantInformationErrors = {
    /**
     * Bad request
     */
    400: unknown;
};
export type PeppolGetParticipantInformationResponses = {
    /**
     * Participant information
     */
    200: ParticipantInformationResponse;
};
export type PeppolGetParticipantInformationResponse = PeppolGetParticipantInformationResponses[keyof PeppolGetParticipantInformationResponses];
export type ProductGetProductData = {
    body?: never;
    path: {
        productID: number;
    };
    query?: never;
    url: "/v1/products/{productID}";
};
export type ProductGetProductErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type ProductGetProductResponses = {
    /**
     * A product specified by the productID
     */
    200: Product;
};
export type ProductGetProductResponse = ProductGetProductResponses[keyof ProductGetProductResponses];
export type ProductGetProductsData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/products";
};
export type ProductGetProductsErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type ProductGetProductsResponses = {
    /**
     * A list of products
     */
    200: PageResultProduct;
};
export type ProductGetProductsResponse = ProductGetProductsResponses[keyof ProductGetProductsResponses];
export type ProductPostProductData = {
    body: Product;
    path?: never;
    query?: never;
    url: "/v1/products";
};
export type ProductPostProductErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type ProductPostProductResponses = {
    /**
     * Product was created/updated
     */
    200: number;
};
export type ProductPostProductResponse = ProductPostProductResponses[keyof ProductPostProductResponses];
export type ReportReportListGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/reports";
};
export type ReportReportListGetErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type ReportReportListGetResponses = {
    /**
     * A list of reports
     */
    200: Array<ReportsExportOverViewModel>;
};
export type ReportReportListGetResponse = ReportReportListGetResponses[keyof ReportReportListGetResponses];
export type ReportReportDetailGetData = {
    body?: never;
    path: {
        reportID: number;
    };
    query?: never;
    url: "/v1/reports/{reportID}";
};
export type ReportReportDetailGetErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type ReportReportDetailGetResponses = {
    /**
     * Result and name of a report
     */
    200: ReportDetailModel;
};
export type ReportReportDetailGetResponse = ReportReportDetailGetResponses[keyof ReportReportDetailGetResponses];
export type ToProcessPostToProcessData = {
    body: ToProcessSaveRequest;
    path?: never;
    query?: never;
    url: "/v1/toProcess";
};
export type ToProcessPostToProcessErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type ToProcessPostToProcessResponses = {
    /**
     * An upload ID
     */
    200: number;
};
export type ToProcessPostToProcessResponse = ToProcessPostToProcessResponses[keyof ToProcessPostToProcessResponses];
export type ToProcessDeleteToProcessData = {
    body?: never;
    path: {
        uploadID: number;
    };
    query?: never;
    url: "/v1/toProcess/{uploadID}";
};
export type ToProcessDeleteToProcessErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type ToProcessDeleteToProcessResponses = {
    /**
     * Document was deleted
     */
    200: unknown;
};
export type WebhookGetWebhooksData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/v1/webhooks";
};
export type WebhookGetWebhooksErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type WebhookGetWebhooksResponses = {
    /**
     * A list of webhooks
     */
    200: Array<Webhook>;
};
export type WebhookGetWebhooksResponse = WebhookGetWebhooksResponses[keyof WebhookGetWebhooksResponses];
export type WebhookPostWebhookData = {
    body: Webhook;
    path?: never;
    query?: never;
    url: "/v1/webhooks";
};
export type WebhookPostWebhookErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type WebhookPostWebhookResponses = {
    /**
     * Webhook was created
     */
    200: Webhook;
};
export type WebhookPostWebhookResponse = WebhookPostWebhookResponses[keyof WebhookPostWebhookResponses];
export type WebhookDeleteWebhooksData = {
    body?: never;
    path: {
        webhookID: number;
    };
    query?: never;
    url: "/v1/webhooks/{webhookID}";
};
export type WebhookDeleteWebhooksErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type WebhookDeleteWebhooksResponses = {
    /**
     * Webhook was deleted
     */
    200: boolean;
};
export type WebhookDeleteWebhooksResponse = WebhookDeleteWebhooksResponses[keyof WebhookDeleteWebhooksResponses];
export type WebhookRefreshWebhookSecretData = {
    body?: never;
    path: {
        webhookID: number;
    };
    query?: never;
    url: "/v1/webhooks/refresh/{webhookID}";
};
export type WebhookRefreshWebhookSecretErrors = {
    /**
     * Bad request
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type WebhookRefreshWebhookSecretResponses = {
    /**
     * Refreshed webhook secret
     */
    200: string;
};
export type WebhookRefreshWebhookSecretResponse = WebhookRefreshWebhookSecretResponses[keyof WebhookRefreshWebhookSecretResponses];
export type ClientOptions = {
    baseUrl: "https://api.sandbox.billit.be" | (string & {});
};
