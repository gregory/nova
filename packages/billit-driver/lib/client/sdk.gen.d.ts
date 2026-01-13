import type { Options as ClientOptions, TDataShape, Client } from "./client";
import type { AccountGetAccountInformationData, AccountGetAccountInformationResponses, AccountGetAccountInformationErrors, AccountGetSsoTokenData, AccountGetSsoTokenResponses, AccountGetSsoTokenErrors, AccountPostSequencesData, AccountPostSequencesResponses, AccountPostSequencesErrors, AccountRegisterCompanyData, AccountRegisterCompanyResponses, AccountRegisterCompanyErrors, AccountUpdateLicenseData, AccountUpdateLicenseResponses, AccountUpdateLicenseErrors, AccountAddLicenseBillableData, AccountAddLicenseBillableResponses, AccountAddLicenseBillableErrors, AccountantGetFeedsData, AccountantGetFeedsResponses, AccountantGetFeedsErrors, AccountantPostFeedsData, AccountantPostFeedsResponses, AccountantPostFeedsErrors, AccountantDeleteFeedsData, AccountantDeleteFeedsResponses, AccountantDeleteFeedsErrors, AccountantGetIndexData, AccountantGetIndexResponses, AccountantGetIndexErrors, AccountantPostConfirmData, AccountantPostConfirmResponses, AccountantPostConfirmErrors, AccountantGetFileData, AccountantGetFileResponses, AccountantGetFileErrors, CashbookInitializeCashbookData, CashbookInitializeCashbookResponses, CashbookInitializeCashbookErrors, CashbookCloseCashbookData, CashbookCloseCashbookResponses, CashbookCloseCashbookErrors, CashbookGetCashbookData, CashbookGetCashbookResponses, CashbookGetCashbookErrors, CashbookGetCashbookEntriesData, CashbookGetCashbookEntriesResponses, CashbookGetCashbookEntriesErrors, CashbookGetCashbooksData, CashbookGetCashbooksResponses, CashbookGetCashbooksErrors, CashbookGetCashbookHistoryData, CashbookGetCashbookHistoryResponses, CashbookGetCashbookHistoryErrors, CashbookPostCashbookEntryData, CashbookPostCashbookEntryResponses, CashbookPostCashbookEntryErrors, DailyReceiptPostDailyReceiptBookEntryData, DailyReceiptPostDailyReceiptBookEntryResponses, DailyReceiptPostDailyReceiptBookEntryErrors, DailyReceiptGetDailyReceiptEntryData, DailyReceiptGetDailyReceiptEntryResponses, DailyReceiptGetDailyReceiptEntryErrors, DailyReceiptGetDailyReceiptBooksData, DailyReceiptGetDailyReceiptBooksResponses, DailyReceiptGetDailyReceiptBooksErrors, DailyReceiptGetDailyReceiptBooks2Data, DailyReceiptGetDailyReceiptBooks2Responses, DailyReceiptGetDailyReceiptBooks2Errors, DocumentGetDocumentsData, DocumentGetDocumentsResponses, DocumentPostDocumentData, DocumentPostDocumentResponses, DocumentGetDocumentData, DocumentGetDocumentResponses, EinvoiceGetRegistrationsData, EinvoiceGetRegistrationsResponses, EinvoiceGetRegistrationsErrors, EinvoicePostRegistrationData, EinvoicePostRegistrationResponses, EinvoicePostRegistrationErrors, EinvoiceDeleteRegistrationData, EinvoiceDeleteRegistrationResponses, EinvoiceDeleteRegistrationErrors, EinvoiceGetRegistrationData, EinvoiceGetRegistrationResponses, EinvoiceGetRegistrationErrors, EinvoicePatchEntityData, EinvoicePatchEntityResponses, EinvoicePatchEntityErrors, EinvoicePostRegistrationIntegrationData, EinvoicePostRegistrationIntegrationResponses, EinvoicePostRegistrationIntegrationErrors, EinvoiceDeleteRegistrationIntegrationData, EinvoiceDeleteRegistrationIntegrationResponses, EinvoiceDeleteRegistrationIntegrationErrors, EinvoicePostSendData, EinvoicePostSendResponses, EinvoicePostSendErrors, EinvoiceGetOrdersData, EinvoiceGetOrdersResponses, EinvoiceGetOrdersErrors, EinvoiceGetFileData, EinvoiceGetFileResponses, EinvoiceGetFileErrors, EinvoiceGetOrderData, EinvoiceGetOrderResponses, EinvoiceGetOrderErrors, EinvoicePatchOrderData, EinvoicePatchOrderResponses, EinvoicePatchOrderErrors, EinvoiceGetWebhooksData, EinvoiceGetWebhooksResponses, EinvoiceGetWebhooksErrors, EinvoicePostWebhookData, EinvoicePostWebhookResponses, EinvoicePostWebhookErrors, EinvoiceDeleteWebhooksData, EinvoiceDeleteWebhooksResponses, EinvoiceDeleteWebhooksErrors, EinvoiceRefreshWebhookSecretData, EinvoiceRefreshWebhookSecretResponses, EinvoiceRefreshWebhookSecretErrors, EinvoicePostKycInitiationData, EinvoicePostKycInitiationResponses, EinvoicePostKycInitiationErrors, FileGetOrdersData, FileGetOrdersResponses, FileGetOrdersErrors, FinancialTransactionPostImportFileData, FinancialTransactionPostImportFileResponses, FinancialTransactionPostImportFileErrors, FinancialTransactionPostImportData, FinancialTransactionPostImportResponses, FinancialTransactionPostImportErrors, FinancialTransactionGetBankTransactionsData, FinancialTransactionGetBankTransactionsResponses, FinancialTransactionGetBankTransactionsErrors, GlAccountPostGlAccountData, GlAccountPostGlAccountResponses, GlAccountPostGlAccountErrors, GlAccountPostGlAccountBulkData, GlAccountPostGlAccountBulkResponses, GlAccountPostGlAccountBulkErrors, JournalPostGlAccountData, JournalPostGlAccountResponses, JournalPostGlAccountErrors, MiscGetCompanySearchData, MiscGetCompanySearchResponses, MiscGetCompanySearchErrors, MiscGetTypeCodesData, MiscGetTypeCodesResponses, MiscGetTypeCodesErrors, MiscGetTranslationData, MiscGetTranslationResponses, MiscGetTranslationErrors, OAuth2PostTokenData, OAuth2PostTokenResponses, OAuth2PostTokenErrors, OAuth2PostTokenRevokeData, OAuth2PostTokenRevokeResponses, OAuth2PostTokenRevokeErrors, OrderGetOrdersData, OrderGetOrdersResponses, OrderGetOrdersErrors, OrderPostOrdersData, OrderPostOrdersResponses, OrderPostOrdersErrors, OrderPutOrderBookingsData, OrderPutOrderBookingsResponses, OrderPutOrderBookingsErrors, OrderDeleteOrderData, OrderDeleteOrderResponses, OrderDeleteOrderErrors, OrderGetOrderData, OrderGetOrderResponses, OrderGetOrderErrors, OrderPatchOrdersData, OrderPatchOrdersResponses, OrderPatchOrdersErrors, OrderPostOrderPaymentData, OrderPostOrderPaymentResponses, OrderPostOrderPaymentErrors, OrderPostSendData, OrderPostSendResponses, OrderPostSendErrors, OrderESignOrderData, OrderESignOrderResponses, OrderESignOrderErrors, OrderGetDeletedData, OrderGetDeletedResponses, OrderGetDeletedErrors, PartyGetPartyData, PartyGetPartyResponses, PartyGetPartyErrors, PartyPatchPartiesData, PartyPatchPartiesResponses, PartyPatchPartiesErrors, PartyGetPartiesData, PartyGetPartiesResponses, PartyGetPartiesErrors, PartyPostPartyData, PartyPostPartyResponses, PartyPostPartyErrors, PeppolDeleteParticipantData, PeppolDeleteParticipantResponses, PeppolDeleteParticipantErrors, PeppolPostParticipantData, PeppolPostParticipantResponses, PeppolPostParticipantErrors, PeppolGetInboxData, PeppolGetInboxResponses, PeppolGetInboxErrors, PeppolInboxItemConfirmData, PeppolInboxItemConfirmResponses, PeppolInboxItemConfirmErrors, PeppolInboxItemRefuseData, PeppolInboxItemRefuseResponses, PeppolInboxItemRefuseErrors, PeppolPostSendOrderData, PeppolPostSendOrderResponses, PeppolPostSendOrderErrors, PeppolGetParticipantInformationData, PeppolGetParticipantInformationResponses, PeppolGetParticipantInformationErrors, ProductGetProductData, ProductGetProductResponses, ProductGetProductErrors, ProductGetProductsData, ProductGetProductsResponses, ProductGetProductsErrors, ProductPostProductData, ProductPostProductResponses, ProductPostProductErrors, ReportReportListGetData, ReportReportListGetResponses, ReportReportListGetErrors, ReportReportDetailGetData, ReportReportDetailGetResponses, ReportReportDetailGetErrors, ToProcessPostToProcessData, ToProcessPostToProcessResponses, ToProcessPostToProcessErrors, ToProcessDeleteToProcessData, ToProcessDeleteToProcessResponses, ToProcessDeleteToProcessErrors, WebhookGetWebhooksData, WebhookGetWebhooksResponses, WebhookGetWebhooksErrors, WebhookPostWebhookData, WebhookPostWebhookResponses, WebhookPostWebhookErrors, WebhookDeleteWebhooksData, WebhookDeleteWebhooksResponses, WebhookDeleteWebhooksErrors, WebhookRefreshWebhookSecretData, WebhookRefreshWebhookSecretResponses, WebhookRefreshWebhookSecretErrors } from "./types.gen";
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * Get account information about the current user
 */
export declare const accountGetAccountInformation: <ThrowOnError extends boolean = false>(options?: Options<AccountGetAccountInformationData, ThrowOnError>) => import("./client").RequestResult<AccountGetAccountInformationResponses, AccountGetAccountInformationErrors, ThrowOnError, "fields">;
/**
 * Get an SSO token of the current user
 */
export declare const accountGetSsoToken: <ThrowOnError extends boolean = false>(options?: Options<AccountGetSsoTokenData, ThrowOnError>) => import("./client").RequestResult<AccountGetSsoTokenResponses, AccountGetSsoTokenErrors, ThrowOnError, "fields">;
/**
 * Update the sequence of a specific type
 */
export declare const accountPostSequences: <ThrowOnError extends boolean = false>(options: Options<AccountPostSequencesData, ThrowOnError>) => import("./client").RequestResult<AccountPostSequencesResponses, AccountPostSequencesErrors, ThrowOnError, "fields">;
/**
 * Registers a Company in the Billit-ecosphere
 */
export declare const accountRegisterCompany: <ThrowOnError extends boolean = false>(options: Options<AccountRegisterCompanyData, ThrowOnError>) => import("./client").RequestResult<AccountRegisterCompanyResponses, AccountRegisterCompanyErrors, ThrowOnError, "fields">;
/**
 * Update the license
 */
export declare const accountUpdateLicense: <ThrowOnError extends boolean = false>(options: Options<AccountUpdateLicenseData, ThrowOnError>) => import("./client").RequestResult<AccountUpdateLicenseResponses, AccountUpdateLicenseErrors, ThrowOnError, "fields">;
/**
 * Add new License Billable
 */
export declare const accountAddLicenseBillable: <ThrowOnError extends boolean = false>(options: Options<AccountAddLicenseBillableData, ThrowOnError>) => import("./client").RequestResult<AccountAddLicenseBillableResponses, AccountAddLicenseBillableErrors, ThrowOnError, "fields">;
/**
 * Get a list of all feeds to download
 */
export declare const accountantGetFeeds: <ThrowOnError extends boolean = false>(options?: Options<AccountantGetFeedsData, ThrowOnError>) => import("./client").RequestResult<AccountantGetFeedsResponses, AccountantGetFeedsErrors, ThrowOnError, "fields">;
/**
 * Register a new feed. All newly exported orders or documents will be available in this new feed.
 */
export declare const accountantPostFeeds: <ThrowOnError extends boolean = false>(options: Options<AccountantPostFeedsData, ThrowOnError>) => import("./client").RequestResult<AccountantPostFeedsResponses, AccountantPostFeedsErrors, ThrowOnError, "fields">;
/**
 * Delete the feed
 */
export declare const accountantDeleteFeeds: <ThrowOnError extends boolean = false>(options: Options<AccountantDeleteFeedsData, ThrowOnError>) => import("./client").RequestResult<AccountantDeleteFeedsResponses, AccountantDeleteFeedsErrors, ThrowOnError, "fields">;
/**
 * Get A list of all feeds to download. Only query this once per minute
 */
export declare const accountantGetIndex: <ThrowOnError extends boolean = false>(options: Options<AccountantGetIndexData, ThrowOnError>) => import("./client").RequestResult<AccountantGetIndexResponses, AccountantGetIndexErrors, ThrowOnError, "fields">;
/**
 * Confirm each succesfully downloaded feed item to remove it from the feedlist
 */
export declare const accountantPostConfirm: <ThrowOnError extends boolean = false>(options: Options<AccountantPostConfirmData, ThrowOnError>) => import("./client").RequestResult<AccountantPostConfirmResponses, AccountantPostConfirmErrors, ThrowOnError, "fields">;
/**
 * download a coda file from the feed
 */
export declare const accountantGetFile: <ThrowOnError extends boolean = false>(options: Options<AccountantGetFileData, ThrowOnError>) => import("./client").RequestResult<AccountantGetFileResponses, AccountantGetFileErrors, ThrowOnError, "fields">;
/**
 * Initialize the cash book for first use
 */
export declare const cashbookInitializeCashbook: <ThrowOnError extends boolean = false>(options: Options<CashbookInitializeCashbookData, ThrowOnError>) => import("./client").RequestResult<CashbookInitializeCashbookResponses, CashbookInitializeCashbookErrors, ThrowOnError, "fields">;
/**
 * Permanently close the cash book
 */
export declare const cashbookCloseCashbook: <ThrowOnError extends boolean = false>(options?: Options<CashbookCloseCashbookData, ThrowOnError>) => import("./client").RequestResult<CashbookCloseCashbookResponses, CashbookCloseCashbookErrors, ThrowOnError, "fields">;
/**
 * Get the current active cash book
 */
export declare const cashbookGetCashbook: <ThrowOnError extends boolean = false>(options?: Options<CashbookGetCashbookData, ThrowOnError>) => import("./client").RequestResult<CashbookGetCashbookResponses, CashbookGetCashbookErrors, ThrowOnError, "fields">;
/**
 * Get an overview of all the entries in the current active cash book
 */
export declare const cashbookGetCashbookEntries: <ThrowOnError extends boolean = false>(options?: Options<CashbookGetCashbookEntriesData, ThrowOnError>) => import("./client").RequestResult<CashbookGetCashbookEntriesResponses, CashbookGetCashbookEntriesErrors, ThrowOnError, "fields">;
/**
 * Get an overview of all the closed cash books
 */
export declare const cashbookGetCashbooks: <ThrowOnError extends boolean = false>(options?: Options<CashbookGetCashbooksData, ThrowOnError>) => import("./client").RequestResult<CashbookGetCashbooksResponses, CashbookGetCashbooksErrors, ThrowOnError, "fields">;
/**
 * Get an overview of all the entries in a closed cash book
 */
export declare const cashbookGetCashbookHistory: <ThrowOnError extends boolean = false>(options: Options<CashbookGetCashbookHistoryData, ThrowOnError>) => import("./client").RequestResult<CashbookGetCashbookHistoryResponses, CashbookGetCashbookHistoryErrors, ThrowOnError, "fields">;
/**
 * Add an entry to the current active cash book
 */
export declare const cashbookPostCashbookEntry: <ThrowOnError extends boolean = false>(options: Options<CashbookPostCashbookEntryData, ThrowOnError>) => import("./client").RequestResult<CashbookPostCashbookEntryResponses, CashbookPostCashbookEntryErrors, ThrowOnError, "fields">;
/**
 * Add a new daily receipt to a new or open daily receipt book
 */
export declare const dailyReceiptPostDailyReceiptBookEntry: <ThrowOnError extends boolean = false>(options: Options<DailyReceiptPostDailyReceiptBookEntryData, ThrowOnError>) => import("./client").RequestResult<DailyReceiptPostDailyReceiptBookEntryResponses, DailyReceiptPostDailyReceiptBookEntryErrors, ThrowOnError, "fields">;
/**
 * Get a daily receipt entry
 */
export declare const dailyReceiptGetDailyReceiptEntry: <ThrowOnError extends boolean = false>(options: Options<DailyReceiptGetDailyReceiptEntryData, ThrowOnError>) => import("./client").RequestResult<DailyReceiptGetDailyReceiptEntryResponses, DailyReceiptGetDailyReceiptEntryErrors, ThrowOnError, "fields">;
/**
 * Get a daily receipt book with details
 */
export declare const dailyReceiptGetDailyReceiptBooks: <ThrowOnError extends boolean = false>(options: Options<DailyReceiptGetDailyReceiptBooksData, ThrowOnError>) => import("./client").RequestResult<DailyReceiptGetDailyReceiptBooksResponses, DailyReceiptGetDailyReceiptBooksErrors, ThrowOnError, "fields">;
/**
 * Get a daily receipt book list
 */
export declare const dailyReceiptGetDailyReceiptBooks2: <ThrowOnError extends boolean = false>(options?: Options<DailyReceiptGetDailyReceiptBooks2Data, ThrowOnError>) => import("./client").RequestResult<DailyReceiptGetDailyReceiptBooks2Responses, DailyReceiptGetDailyReceiptBooks2Errors, ThrowOnError, "fields">;
/**
 * Get a list of documents
 */
export declare const documentGetDocuments: <ThrowOnError extends boolean = false>(options?: Options<DocumentGetDocumentsData, ThrowOnError>) => import("./client").RequestResult<DocumentGetDocumentsResponses, unknown, ThrowOnError, "fields">;
/**
 * Save a document
 */
export declare const documentPostDocument: <ThrowOnError extends boolean = false>(options: Options<DocumentPostDocumentData, ThrowOnError>) => import("./client").RequestResult<DocumentPostDocumentResponses, unknown, ThrowOnError, "fields">;
/**
 * Get a document specified by the documentID
 */
export declare const documentGetDocument: <ThrowOnError extends boolean = false>(options: Options<DocumentGetDocumentData, ThrowOnError>) => import("./client").RequestResult<DocumentGetDocumentResponses, unknown, ThrowOnError, "fields">;
/**
 * Retrieve all E-invoice registrations
 */
export declare const einvoiceGetRegistrations: <ThrowOnError extends boolean = false>(options?: Options<EinvoiceGetRegistrationsData, ThrowOnError>) => import("./client").RequestResult<EinvoiceGetRegistrationsResponses, EinvoiceGetRegistrationsErrors, ThrowOnError, "fields">;
/**
 * Create an E-invoice registration for a new entity
 */
export declare const einvoicePostRegistration: <ThrowOnError extends boolean = false>(options: Options<EinvoicePostRegistrationData, ThrowOnError>) => import("./client").RequestResult<EinvoicePostRegistrationResponses, EinvoicePostRegistrationErrors, ThrowOnError, "fields">;
/**
 * Delete a registration
 */
export declare const einvoiceDeleteRegistration: <ThrowOnError extends boolean = false>(options: Options<EinvoiceDeleteRegistrationData, ThrowOnError>) => import("./client").RequestResult<EinvoiceDeleteRegistrationResponses, EinvoiceDeleteRegistrationErrors, ThrowOnError, "fields">;
/**
 * Retrieve an E-invoice registration
 */
export declare const einvoiceGetRegistration: <ThrowOnError extends boolean = false>(options: Options<EinvoiceGetRegistrationData, ThrowOnError>) => import("./client").RequestResult<EinvoiceGetRegistrationResponses, EinvoiceGetRegistrationErrors, ThrowOnError, "fields">;
/**
 * Update an E-invoice registration
 */
export declare const einvoicePatchEntity: <ThrowOnError extends boolean = false>(options: Options<EinvoicePatchEntityData, ThrowOnError>) => import("./client").RequestResult<EinvoicePatchEntityResponses, EinvoicePatchEntityErrors, ThrowOnError, "fields">;
/**
 * Activate a new integration
 */
export declare const einvoicePostRegistrationIntegration: <ThrowOnError extends boolean = false>(options: Options<EinvoicePostRegistrationIntegrationData, ThrowOnError>) => import("./client").RequestResult<EinvoicePostRegistrationIntegrationResponses, EinvoicePostRegistrationIntegrationErrors, ThrowOnError, "fields">;
/**
 * Deactivate an integration
 */
export declare const einvoiceDeleteRegistrationIntegration: <ThrowOnError extends boolean = false>(options: Options<EinvoiceDeleteRegistrationIntegrationData, ThrowOnError>) => import("./client").RequestResult<EinvoiceDeleteRegistrationIntegrationResponses, EinvoiceDeleteRegistrationIntegrationErrors, ThrowOnError, "fields">;
/**
 * Create and send an E-document
 */
export declare const einvoicePostSend: <ThrowOnError extends boolean = false>(options: Options<EinvoicePostSendData, ThrowOnError>) => import("./client").RequestResult<EinvoicePostSendResponses, EinvoicePostSendErrors, ThrowOnError, "fields">;
/**
 * Get a list of orders
 */
export declare const einvoiceGetOrders: <ThrowOnError extends boolean = false>(options: Options<EinvoiceGetOrdersData, ThrowOnError>) => import("./client").RequestResult<EinvoiceGetOrdersResponses, EinvoiceGetOrdersErrors, ThrowOnError, "fields">;
/**
 * Get a file specified by the fileID
 */
export declare const einvoiceGetFile: <ThrowOnError extends boolean = false>(options: Options<EinvoiceGetFileData, ThrowOnError>) => import("./client").RequestResult<EinvoiceGetFileResponses, EinvoiceGetFileErrors, ThrowOnError, "fields">;
/**
 * Get an order specified by the orderID
 */
export declare const einvoiceGetOrder: <ThrowOnError extends boolean = false>(options: Options<EinvoiceGetOrderData, ThrowOnError>) => import("./client").RequestResult<EinvoiceGetOrderResponses, EinvoiceGetOrderErrors, ThrowOnError, "fields">;
/**
 * Patch an E-document
 */
export declare const einvoicePatchOrder: <ThrowOnError extends boolean = false>(options: Options<EinvoicePatchOrderData, ThrowOnError>) => import("./client").RequestResult<EinvoicePatchOrderResponses, EinvoicePatchOrderErrors, ThrowOnError, "fields">;
/**
 * Get all webhooks
 */
export declare const einvoiceGetWebhooks: <ThrowOnError extends boolean = false>(options: Options<EinvoiceGetWebhooksData, ThrowOnError>) => import("./client").RequestResult<EinvoiceGetWebhooksResponses, EinvoiceGetWebhooksErrors, ThrowOnError, "fields">;
/**
 * Create a webhook
 */
export declare const einvoicePostWebhook: <ThrowOnError extends boolean = false>(options: Options<EinvoicePostWebhookData, ThrowOnError>) => import("./client").RequestResult<EinvoicePostWebhookResponses, EinvoicePostWebhookErrors, ThrowOnError, "fields">;
/**
 * Delete a webhook
 */
export declare const einvoiceDeleteWebhooks: <ThrowOnError extends boolean = false>(options: Options<EinvoiceDeleteWebhooksData, ThrowOnError>) => import("./client").RequestResult<EinvoiceDeleteWebhooksResponses, EinvoiceDeleteWebhooksErrors, ThrowOnError, "fields">;
/**
 * Refresh an webhook secret
 */
export declare const einvoiceRefreshWebhookSecret: <ThrowOnError extends boolean = false>(options: Options<EinvoiceRefreshWebhookSecretData, ThrowOnError>) => import("./client").RequestResult<EinvoiceRefreshWebhookSecretResponses, EinvoiceRefreshWebhookSecretErrors, ThrowOnError, "fields">;
/**
 * Initiate a KYC procedure
 */
export declare const einvoicePostKycInitiation: <ThrowOnError extends boolean = false>(options: Options<EinvoicePostKycInitiationData, ThrowOnError>) => import("./client").RequestResult<EinvoicePostKycInitiationResponses, EinvoicePostKycInitiationErrors, ThrowOnError, "fields">;
/**
 * Get a file specified by the fileID
 */
export declare const fileGetOrders: <ThrowOnError extends boolean = false>(options: Options<FileGetOrdersData, ThrowOnError>) => import("./client").RequestResult<FileGetOrdersResponses, FileGetOrdersErrors, ThrowOnError, "fields">;
/**
 * Upload a coda file and import the transactions
 */
export declare const financialTransactionPostImportFile: <ThrowOnError extends boolean = false>(options: Options<FinancialTransactionPostImportFileData, ThrowOnError>) => import("./client").RequestResult<FinancialTransactionPostImportFileResponses, FinancialTransactionPostImportFileErrors, ThrowOnError, "fields">;
/**
 * Create transactions using a list
 */
export declare const financialTransactionPostImport: <ThrowOnError extends boolean = false>(options: Options<FinancialTransactionPostImportData, ThrowOnError>) => import("./client").RequestResult<FinancialTransactionPostImportResponses, FinancialTransactionPostImportErrors, ThrowOnError, "fields">;
export declare const financialTransactionGetBankTransactions: <ThrowOnError extends boolean = false>(options?: Options<FinancialTransactionGetBankTransactionsData, ThrowOnError>) => import("./client").RequestResult<FinancialTransactionGetBankTransactionsResponses, FinancialTransactionGetBankTransactionsErrors, ThrowOnError, "fields">;
/**
 * Create a general ledger account
 */
export declare const glAccountPostGlAccount: <ThrowOnError extends boolean = false>(options: Options<GlAccountPostGlAccountData, ThrowOnError>) => import("./client").RequestResult<GlAccountPostGlAccountResponses, GlAccountPostGlAccountErrors, ThrowOnError, "fields">;
/**
 * Create multiple general ledger accounts using a list
 */
export declare const glAccountPostGlAccountBulk: <ThrowOnError extends boolean = false>(options: Options<GlAccountPostGlAccountBulkData, ThrowOnError>) => import("./client").RequestResult<GlAccountPostGlAccountBulkResponses, GlAccountPostGlAccountBulkErrors, ThrowOnError, "fields">;
/**
 * Import a list of journals
 */
export declare const journalPostGlAccount: <ThrowOnError extends boolean = false>(options: Options<JournalPostGlAccountData, ThrowOnError>) => import("./client").RequestResult<JournalPostGlAccountResponses, JournalPostGlAccountErrors, ThrowOnError, "fields">;
/**
 * Search for parties/companies based on a keyword
 */
export declare const miscGetCompanySearch: <ThrowOnError extends boolean = false>(options: Options<MiscGetCompanySearchData, ThrowOnError>) => import("./client").RequestResult<MiscGetCompanySearchResponses, MiscGetCompanySearchErrors, ThrowOnError, "fields">;
/**
 * Get all translations of a specified TypeCode
 */
export declare const miscGetTypeCodes: <ThrowOnError extends boolean = false>(options: Options<MiscGetTypeCodesData, ThrowOnError>) => import("./client").RequestResult<MiscGetTypeCodesResponses, MiscGetTypeCodesErrors, ThrowOnError, "fields">;
/**
 * Get a translations of a key of a typecode, optionally in a specified language
 */
export declare const miscGetTranslation: <ThrowOnError extends boolean = false>(options: Options<MiscGetTranslationData, ThrowOnError>) => import("./client").RequestResult<MiscGetTranslationResponses, MiscGetTranslationErrors, ThrowOnError, "fields">;
export declare const oAuth2PostToken: <ThrowOnError extends boolean = false>(options: Options<OAuth2PostTokenData, ThrowOnError>) => import("./client").RequestResult<OAuth2PostTokenResponses, OAuth2PostTokenErrors, ThrowOnError, "fields">;
export declare const oAuth2PostTokenRevoke: <ThrowOnError extends boolean = false>(options?: Options<OAuth2PostTokenRevokeData, ThrowOnError>) => import("./client").RequestResult<OAuth2PostTokenRevokeResponses, OAuth2PostTokenRevokeErrors, ThrowOnError, "fields">;
/**
 * Get a list of invoices/credit notes/order/...
 */
export declare const orderGetOrders: <ThrowOnError extends boolean = false>(options?: Options<OrderGetOrdersData, ThrowOnError>) => import("./client").RequestResult<OrderGetOrdersResponses, OrderGetOrdersErrors, ThrowOnError, "fields">;
/**
 * Create a new order or update an existing one
 */
export declare const orderPostOrders: <ThrowOnError extends boolean = false>(options: Options<OrderPostOrdersData, ThrowOnError>) => import("./client").RequestResult<OrderPostOrdersResponses, OrderPostOrdersErrors, ThrowOnError, "fields">;
/**
 * Add a booking lines collection
 */
export declare const orderPutOrderBookings: <ThrowOnError extends boolean = false>(options: Options<OrderPutOrderBookingsData, ThrowOnError>) => import("./client").RequestResult<OrderPutOrderBookingsResponses, OrderPutOrderBookingsErrors, ThrowOnError, "fields">;
/**
 * Delete a specific order
 */
export declare const orderDeleteOrder: <ThrowOnError extends boolean = false>(options: Options<OrderDeleteOrderData, ThrowOnError>) => import("./client").RequestResult<OrderDeleteOrderResponses, OrderDeleteOrderErrors, ThrowOnError, "fields">;
/**
 * Get a specific order
 */
export declare const orderGetOrder: <ThrowOnError extends boolean = false>(options: Options<OrderGetOrderData, ThrowOnError>) => import("./client").RequestResult<OrderGetOrderResponses, OrderGetOrderErrors, ThrowOnError, "fields">;
/**
 * Patch an order
 */
export declare const orderPatchOrders: <ThrowOnError extends boolean = false>(options: Options<OrderPatchOrdersData, ThrowOnError>) => import("./client").RequestResult<OrderPatchOrdersResponses, OrderPatchOrdersErrors, ThrowOnError, "fields">;
/**
 * Add a partial or full payment to an order
 */
export declare const orderPostOrderPayment: <ThrowOnError extends boolean = false>(options: Options<OrderPostOrderPaymentData, ThrowOnError>) => import("./client").RequestResult<OrderPostOrderPaymentResponses, OrderPostOrderPaymentErrors, ThrowOnError, "fields">;
/**
 * Send a list of orders via a specified channel
 */
export declare const orderPostSend: <ThrowOnError extends boolean = false>(options: Options<OrderPostSendData, ThrowOnError>) => import("./client").RequestResult<OrderPostSendResponses, OrderPostSendErrors, ThrowOnError, "fields">;
/**
 * E-Sign an order
 */
export declare const orderESignOrder: <ThrowOnError extends boolean = false>(options: Options<OrderESignOrderData, ThrowOnError>) => import("./client").RequestResult<OrderESignOrderResponses, OrderESignOrderErrors, ThrowOnError, "fields">;
/**
 * Get a list of deleted orders
 */
export declare const orderGetDeleted: <ThrowOnError extends boolean = false>(options?: Options<OrderGetDeletedData, ThrowOnError>) => import("./client").RequestResult<OrderGetDeletedResponses, OrderGetDeletedErrors, ThrowOnError, "fields">;
/**
 * Get a party specified by the partyID
 */
export declare const partyGetParty: <ThrowOnError extends boolean = false>(options: Options<PartyGetPartyData, ThrowOnError>) => import("./client").RequestResult<PartyGetPartyResponses, PartyGetPartyErrors, ThrowOnError, "fields">;
/**
 * Patch Party Properties. NavigationProperties are not supported.
 */
export declare const partyPatchParties: <ThrowOnError extends boolean = false>(options: Options<PartyPatchPartiesData, ThrowOnError>) => import("./client").RequestResult<PartyPatchPartiesResponses, PartyPatchPartiesErrors, ThrowOnError, "fields">;
/**
 * Get a list of customers or suppliers
 */
export declare const partyGetParties: <ThrowOnError extends boolean = false>(options?: Options<PartyGetPartiesData, ThrowOnError>) => import("./client").RequestResult<PartyGetPartiesResponses, PartyGetPartiesErrors, ThrowOnError, "fields">;
/**
 * Create a new party or update an existing one
 */
export declare const partyPostParty: <ThrowOnError extends boolean = false>(options: Options<PartyPostPartyData, ThrowOnError>) => import("./client").RequestResult<PartyPostPartyResponses, PartyPostPartyErrors, ThrowOnError, "fields">;
/**
 * Delete a Peppol registration for a specific company
 */
export declare const peppolDeleteParticipant: <ThrowOnError extends boolean = false>(options: Options<PeppolDeleteParticipantData, ThrowOnError>) => import("./client").RequestResult<PeppolDeleteParticipantResponses, PeppolDeleteParticipantErrors, ThrowOnError, "fields">;
/**
 * Create a new Peppol registration for a specific company
 */
export declare const peppolPostParticipant: <ThrowOnError extends boolean = false>(options: Options<PeppolPostParticipantData, ThrowOnError>) => import("./client").RequestResult<PeppolPostParticipantResponses, PeppolPostParticipantErrors, ThrowOnError, "fields">;
/**
 * Lists the first 10 peppol items in the inbox. Use the file api to download the actual message. Use the confirm or refuse endpoint to remove it from the queue
 */
export declare const peppolGetInbox: <ThrowOnError extends boolean = false>(options?: Options<PeppolGetInboxData, ThrowOnError>) => import("./client").RequestResult<PeppolGetInboxResponses, PeppolGetInboxErrors, ThrowOnError, "fields">;
/**
 * Confirm an inbox item and remove it from the queue
 */
export declare const peppolInboxItemConfirm: <ThrowOnError extends boolean = false>(options: Options<PeppolInboxItemConfirmData, ThrowOnError>) => import("./client").RequestResult<PeppolInboxItemConfirmResponses, PeppolInboxItemConfirmErrors, ThrowOnError, "fields">;
/**
 * Refuse an inbox item and remove it from the queue
 */
export declare const peppolInboxItemRefuse: <ThrowOnError extends boolean = false>(options: Options<PeppolInboxItemRefuseData, ThrowOnError>) => import("./client").RequestResult<PeppolInboxItemRefuseResponses, PeppolInboxItemRefuseErrors, ThrowOnError, "fields">;
/**
 * Send a direct Peppol message. Compatible with receivers that support Invoice5, Creditnote5, BisV3 Invoice or BisV3 Creditnote
 */
export declare const peppolPostSendOrder: <ThrowOnError extends boolean = false>(options: Options<PeppolPostSendOrderData, ThrowOnError>) => import("./client").RequestResult<PeppolPostSendOrderResponses, PeppolPostSendOrderErrors, ThrowOnError, "fields">;
/**
 * Get Peppol participant information. API key is not required
 */
export declare const peppolGetParticipantInformation: <ThrowOnError extends boolean = false>(options: Options<PeppolGetParticipantInformationData, ThrowOnError>) => import("./client").RequestResult<PeppolGetParticipantInformationResponses, PeppolGetParticipantInformationErrors, ThrowOnError, "fields">;
/**
 * Get a specific product
 */
export declare const productGetProduct: <ThrowOnError extends boolean = false>(options: Options<ProductGetProductData, ThrowOnError>) => import("./client").RequestResult<ProductGetProductResponses, ProductGetProductErrors, ThrowOnError, "fields">;
/**
 * Get a list of products
 */
export declare const productGetProducts: <ThrowOnError extends boolean = false>(options?: Options<ProductGetProductsData, ThrowOnError>) => import("./client").RequestResult<ProductGetProductsResponses, ProductGetProductsErrors, ThrowOnError, "fields">;
/**
 * Create a new product or update an existing one
 */
export declare const productPostProduct: <ThrowOnError extends boolean = false>(options: Options<ProductPostProductData, ThrowOnError>) => import("./client").RequestResult<ProductPostProductResponses, ProductPostProductErrors, ThrowOnError, "fields">;
/**
 * Get a list of available reports for the current user
 */
export declare const reportReportListGet: <ThrowOnError extends boolean = false>(options?: Options<ReportReportListGetData, ThrowOnError>) => import("./client").RequestResult<ReportReportListGetResponses, ReportReportListGetErrors, ThrowOnError, "fields">;
/**
 * Get the result and name of the report specified by the reportID
 */
export declare const reportReportDetailGet: <ThrowOnError extends boolean = false>(options: Options<ReportReportDetailGetData, ThrowOnError>) => import("./client").RequestResult<ReportReportDetailGetResponses, ReportReportDetailGetErrors, ThrowOnError, "fields">;
/**
 * Save a new document to process
 */
export declare const toProcessPostToProcess: <ThrowOnError extends boolean = false>(options: Options<ToProcessPostToProcessData, ThrowOnError>) => import("./client").RequestResult<ToProcessPostToProcessResponses, ToProcessPostToProcessErrors, ThrowOnError, "fields">;
/**
 * Delete a document to process
 */
export declare const toProcessDeleteToProcess: <ThrowOnError extends boolean = false>(options: Options<ToProcessDeleteToProcessData, ThrowOnError>) => import("./client").RequestResult<ToProcessDeleteToProcessResponses, ToProcessDeleteToProcessErrors, ThrowOnError, "fields">;
/**
 * Get all webhooks
 */
export declare const webhookGetWebhooks: <ThrowOnError extends boolean = false>(options?: Options<WebhookGetWebhooksData, ThrowOnError>) => import("./client").RequestResult<WebhookGetWebhooksResponses, WebhookGetWebhooksErrors, ThrowOnError, "fields">;
/**
 * Create a webhook
 * Sample request:
 *
 * POST /v1/webhooks
 * {
 * "EntityType": "Order",
 * "WebhookURL": "https://my.Webhook.url.com/Callback"
 * }
 */
export declare const webhookPostWebhook: <ThrowOnError extends boolean = false>(options: Options<WebhookPostWebhookData, ThrowOnError>) => import("./client").RequestResult<WebhookPostWebhookResponses, WebhookPostWebhookErrors, ThrowOnError, "fields">;
/**
 * Delete a webhook
 */
export declare const webhookDeleteWebhooks: <ThrowOnError extends boolean = false>(options: Options<WebhookDeleteWebhooksData, ThrowOnError>) => import("./client").RequestResult<WebhookDeleteWebhooksResponses, WebhookDeleteWebhooksErrors, ThrowOnError, "fields">;
/**
 * Refresh a webhook secret
 */
export declare const webhookRefreshWebhookSecret: <ThrowOnError extends boolean = false>(options: Options<WebhookRefreshWebhookSecretData, ThrowOnError>) => import("./client").RequestResult<WebhookRefreshWebhookSecretResponses, WebhookRefreshWebhookSecretErrors, ThrowOnError, "fields">;
